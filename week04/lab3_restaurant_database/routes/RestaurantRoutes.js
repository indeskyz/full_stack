const express = require("express");
const restaurantModel = require('../models/Restaurant')
const app = express()


app.get("/restaurants", async (req, res, next) => {
  let checkQueryString = req.query.sortBy;
  if (checkQueryString) {
    next();
    return;
  } else {
    restaurantModel.find({}).exec((err, data) => {
      if (err) {
        res.send(JSON.stringify({ status: false, message: "No data found" }));
        return;
      } else {
        res.send(data);
      }
    });
  }
});




//  Select objectID, restaurant_id, cuisines, name & city
//  Allows for user to sort by ASC or DESC
app.get("/restaurants", async (req, res, next) => {
  checkSortingType = req.query.sortBy;
  if (checkSortingType === "ASC") {
    restaurantModel
      .find({}, "restaurant_id cuisine name city ")
      .sort("restaurant_id")
      .exec((err, data) => {
        if (err) {
          res.send(JSON.stringify({ status: false, message: "No data found" }));
          return;
        } else {
          res.send(data);
        }
      });
  }
  else if(checkSortingType === "DESC") {
    restaurantModel
      .find({}, "restaurant_id cuisine name city")
      .sort("-restaurant_id")
      .exec((err, data) => {
        if (err) {
          res.send(JSON.stringify({ status: false, message: "No data found" }));
          return;
        } else {
          res.send(data);
        }
      });
  } else{
        res.status(500).send(JSON.stringify({ status: false, helpMessage: 'Did you mean to use sortBy=ASC or sortBy=DESC?'}),null, 10)
        return
  }
});

// Select restaurant details by cuisine type
app.get("/restaurants/cuisine/:type", async (req, res) => {
  const type = req.params.type;
  const restaurants = await restaurantModel.find({ cuisine: type });

  try {
    if (restaurants.length != 0) {
      res.send(restaurants);
    } else {
      res.send(JSON.stringify({ status: false, message: "No data found, did you captailize the first letter? --> 'Hamburgers' not 'hamburgers' " }));
    }
  } catch (err) {
    res.status(500).send(err);
  }
});


// Select restaurant details where cuisines === Delicatessen && city !== Brooklyn
// Returns only cuisines, name, & city
app.get("/restaurants/Delicatessen", async (req, res) => {
  try {
    const restaurants = restaurantModel
      .find({}, 'cuisine name city -_id')
      .where("cuisine")
      .equals("Delicatessen")
      .where("city")
      .ne("Brooklyn")
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



module.exports = app
