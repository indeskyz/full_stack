const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
  hotel_id: {
    type: Number,
    required: true,
    trim: true,
    unique: true,
  },
  hotel_name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  street: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  postal_code: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: function (value) {
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailRegex.test(value);
    },
    message: (props) => `${props.value} is invalid!`,
  },
  user_id: {
    type: Number,
    required: true,
    trim: true,
    unique: true,
  },
});

const Hotels = mongoose.model("Hotels", HotelSchema)
module.exports = Hotels
