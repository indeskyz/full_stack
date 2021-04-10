require("dotenv").config();
const MONGO_URL = process.env.DB_CONNECTION
const PORT = process.env.PORT

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express();
const http = require('http').Server(app)
const io = require('socket.io')(http)

const currTime = new Date().toLocaleString()

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


var Message = mongoose.model('Message',{
    name : String,
    message : String,
    time : {type: String, default: new Date().toLocaleString()},
  })


app.get('/messages', (req, res) => {
  Message.find({},(err, messages)=> {
    res.send(messages);
  })
})

app.post("/messages", (req, res) => {
  var message = new Message(req.body);
  message.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    io.emit("message", req.body);
    res.sendStatus(200);
  });
});


// rooms which are currently available in chat
const rooms = ["global-chat", "news", "stocks"];

//grab the username
io.on("connection", function (socket) {
  socket.on("message", (username) => {
    socket.username = username;
  });

  socket.room = "global-chat";
  socket.join("global-chat");

  //when a user joins, inform all users of it
  socket.emit("updatechat", "SERVER", "connected to global-chat");
  socket.emit("updaterooms", rooms, "global-chat");
  
  socket.on("sendMessage", function (data) {
    io.sockets.in(socket.room).emit("updatechat", socket.username, data);
  });
  
  //when a user joins a new room; leave the current room they're in, update the users that they have left,
  //then join the new room and tell the users of the new room that a new user has joined
  socket.on("switchRoom", function (newroom) {
    socket.leave(socket.room);
    socket.join(newroom);
    socket.emit("updatechat", "SERVER", "you have connected to " + newroom);
    socket.broadcast
      .to(socket.room)
      .emit("updatechat", "SERVER", socket.username + " left");
    socket.room = newroom;
    socket.broadcast
      .to(socket.room)
      .emit("updatechat", "SERVER", socket.username + " joined");
    socket.emit("updaterooms", rooms, newroom);
  });

socket.on("userIsTyping", (status) => {
  socket.broadcast
    .to(socket.room)
    .emit("showUserTyping", { name: socket.username, status });
});


});


mongoose.connect(
  `${MONGO_URL}`,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("MongoDB Connection Successful");
    }
  }
);
const server = http.listen(PORT, () => {
  console.log(`Server started at: ${currTime} \nServer is running...`);
});
