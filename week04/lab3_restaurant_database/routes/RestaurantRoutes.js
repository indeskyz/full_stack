const express = require('express')
const restaurantModel = require('../models/Restaurant')
const app = express()

//Select All
app.get("/restaurants", async (req, res) => {
  const restaurants = await restaurantModel.find({});

  try {
    res.send(restaurants);
  } catch (err) {
    res.status(500).send(err);
  }
});



//Select restaurant details by cuisine type
app.get("/restaurants/cuisine/:type", async (req, res) => {
  const type = req.params.type;
  const restaurants = await restaurantModel.find({ cuisine: type });

  try {
    if (restaurants.length != 0) {
      res.send(restaurants);
    } else {
      res.send(JSON.stringify({ status: false, message: "No data found" }));
    }
  } catch (err) {
    res.status(500).send(err);
  }
});



//Select objectID restaurant_id, cuisines, name, & city
//Allows for user to sort by ASC or DESC
app.get("/restaurants", async (req, res) => {
  if (req.query.sortBy === "ASC") {
    try {
      const restaurants = restaurantModel
        .find({})
        .select("restaurant_id cuisine name city")
        .sort("restaurant_id")
        .exec((err, data) => {
          if (err) {
            res.send(
              JSON.stringify({ status: false, message: "No data found" })
            );
          } else {
            res.send(data);
          }
        });
    } catch (err) {
      res.status(500).send(err);
    }
  } else if (req.query.sortBy === "DESC") {
    try {
      const restaurants = restaurantModel
        .find({})
        .select("restaurant_id cuisine name city")
        .sort("-restaurant_id")
        .exec((err, data) => {
          if (err) {
            res.send(
              JSON.stringify({ status: false, message: "No data found" })
            );
          } else {
            res.send(data);
          }
        });
    } catch (err) {
      res.status(500).send(err);
    }
  }
});





//Select restaurant details where cuisines === Delicatessen && city !== Brooklyn
//Returns only cuisines, name, & city
app.get("/restaurants/Delicatessen", async (req, res) => {
  try {
    const restaurants = restaurantModel
      .find({})
      .where("cuisine")
      .equals("Delicatessen")
      .where("city")
      .ne("Brooklyn")
      .select("cuisine name city")
      .sort("name")
      .exec((err, data) => {
        if (err) {
          res.send(JSON.stringify({ status: false, message: "No data found" }));
        } else {
          res.send(data);
        }
      });
  } catch (err) {
    res.status(500).send(err);
  }
});
