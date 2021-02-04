var express = require("express");
var app = express()
const PORT = 8080

const server = app.listen(PORT, ()=>{
        console.log(`News app running on port: ${PORT}`)
})

//get server socket
var io = require('socket.io')(server)


//register the index route of the app 
//that returns the HTML file
var clientsConnected = 0
app.get('/',(req,res)=>{
        clientsConnected++
        console.log('Home Page')
        console.log(`Connected Clients:${clientsConnected}`)
    res.sendFile(__dirname+'/index.html')
})

var users = [];
//ready to recieve new connection
io.on("connection", (socket) => {
  console.log(`new conenction recieved: ${socket.id}`);
  //send hello to client
  socket.emit("welcome", "Welcome to the Server");
  users.push();
  const news = [
    {
      title: "The cure of the Sadness is to play Videogames",
      date: "04.10.2016",
    },

    {
      title: "Batman saves Racoon City, the Joker is infected once again",
      date: "05.10.2016",
    },

    {
      title: "Deadpool doesn't want to do a third part of the franchise",
      date: "05.10.2016",
    },

    {
      title:
        "Quicksilver demand Warner Bros. due to plagiarism with Speedy Gonzales",
      date: "04.10.2016",
    },
  ];
  //sending news to clients
  socket.emit("send-news", news);

  socket.on("news-recieve", (data) => {
    console.log("news-recieve", data);
  });
});
