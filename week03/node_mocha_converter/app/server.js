// app/server.js

var express = require("express");
var app = express();
var converter = require("./converter");

//http://localhost:3000/rgbToHex?red=100&green=100&blue=100
app.get("/rgbToHex", (req, res) => {

  var red   = parseInt(req.query.red, 10);
  var green = parseInt(req.query.green, 10);
  var blue  = parseInt(req.query.blue, 10);
  var hex = converter.rgbToHex(red, green, blue);
  res.send(hex);

});

//http://localhost:3000/hexToRgb?hex=646464
app.get("/hexToRgb", (req, res) => {

  var hex = req.query.hex;
  var rgb = converter.hexToRgb(hex);
  res.send(JSON.stringify(rgb));

});

app.listen(3000);