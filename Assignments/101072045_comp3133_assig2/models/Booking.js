const mongoose = require("mongoose");
const { checkEmail, checkPostalCode, checkDate } = require("../helpers/regex");

const BookingSchema = new mongoose.Schema(
  {
    hotel_id: {
      type: Number,
      required: [true, "A Hotel ID Must be Provided"],
      trim: true,
      unique: true,
      min: [1, "Hotel ID Must be Greater than 0"],
    },
    booking_date: {
      type: String,
      required: [true, "Please Enter the Date of your Inital Booking"],
      trim: true,
      unqiue: true,
      lowercase: true,
      minLength: [3, "Booking Date must be longer than 2 Characters"],
      maxLength: [15, "Booking Date Cannot Exceed 15 Characters"],
      validate: function (startDate) {
        return checkDate.test(startDate);
      },
      message: (props) =>
        `${props.value} is an invalid format! \nDates must match YYYY-MM-DD or YYYY/MM/DD `,
    },
    booking_start: {
      type: String,
      required: [true, "Please Enter the Date You Wish to Begin Your Stay"],
      trim: true,
      unique: true,
      lowercase: true,
      minLength: [
        3,
        "The Start of your Booking Date Must be Longer than 2 Characters",
      ],
      maxLength: [
        15,
        "The Start of your Booking Date Cannot Exceed 15 Characters",
      ],
      validate: function (startDate) {
        return checkDate.test(startDate);
      },
      message: (props) =>
        `${props.value} is an invalid format! \nDates must match YYYY-MM-DD or YYYY/MM/DD `,
    },
    booking_end: {
      type: String,
      required: [true, "please enter the date you wish to checkout on"],
      trim: true,
      unique: true,
      lowercase: true,
      minLength: [
        3,
        "The End of your Booking Date Must be Longer than 2 Characters",
      ],
      maxLength: [
        15,
        "The End of your Booking Date Cannot Exceed 15 Characters",
      ],
      validate: function (startDate) {
        return checkDate.test(startDate);
      },
      message: (props) =>
        `${props.value} is an invalid format! \nDates must match YYYY-MM-DD or YYYY/MM/DD `,
    },

    user_id: {
      type: Number,
      required: true,
      trim: true,
      unqiue: true,
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;
