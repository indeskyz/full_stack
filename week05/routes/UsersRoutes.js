const express = require("express")
const usersModel = require("../model/Users")
const app = express()

app.post("/users", async (req, res) => {
  const user = new usersModel(req.body);
  try {
    user.save((err) => {
      if (err) {
        res.send(err);
      } else {
        res.send(user);
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
});


app.get("/findAll", async (req, res) => {
  const users = await usersModel.find({});
  try {
    res.status(200).send(users);
  } catch (err) {
    res.status.send(err);
  }
});

module.exports = app
