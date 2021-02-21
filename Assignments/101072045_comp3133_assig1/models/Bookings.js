const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  hotel_id: {
    type: Number,
    required: true,
    trim: true,
    unique: true,
  },
  booking_date: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
    booking_start: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  booking_end: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  user_id: {
    type: Number,
    required: true,
    trim: true,
    unique: true,
  },
});

const Booking = mongoose.model("Booking", BookingSchema)
module.exports = Booking
