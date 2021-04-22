const { checkEmail, checkPostalCode, checkDate } = require("../helpers/regex");
const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema(
  {
    hotel_id: {
      type: Number,
      required: [true, "A Hotel ID must be Provided"],
      trim: true,
      unique: true,
      min: [1, "Hotel ID Must be Greater than 0"],
    },
    hotel_name: {
      type: String,
      required: [true, "A Hotel Name must be Provided"],
      trim: true,
      unique: true,
      lowercase: true,
      minLength: [3, "Hotel Name Must be Longer than 2 Characters"],
      maxLength: [15, "Hotel Name Cannot Exceed 15 Characters"],
    },

    street: {
      type: String,
      required: [
        true,
        "Please provide the street of the hotel you will be staying at",
      ],
      trim: true,
      unique: true,
      lowercase: true,
      minLength: [3, "Street Name Must be Longer than 2 Characters"],
      maxLength: [50, "Street Name Cannot Exceed 50 Characters"],
    },
    city: {
      type: String,
      required: [true, "Please provide the city where the hotel is located in"],
      trim: true,
      unique: true,
      lowercase: true,
      minLength: [3, "CityName Must be Longer than 3 Characters"],
      maxLength: [50, "City Name Cannot Exceed 50 Characters"],
    },
    postal_code: {
      type: String,
      required: [true, "Please provide the postal code of the hotel"],
      trim: true,
      unique: true,
      lowercase: true,
      validate: function (postalCode) {
        return checkPostalCode.test(postalCode);
      },
      message: (props) =>
        `${props.value} is an invalid Postal Code format. \nmust match N7S 1T6 or N7S1T6`,
      minLength: [1, "Invalid Postal Code"],
      maxLength: [8, "Invalid Postal Code"],
    },

    price: {
      type: Number,
      required: [true, "Please enter the total price of your stay"],
      trim: true,
      unique: true,
      min: [1, "Cannot accept negative values or values less than 1"],
    },

    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
      lowercase: true,
      validate: function (emailString) {
        return checkEmail.test(emailString);
      },
      message: (props) =>
        `${props.value} is an invalid email format. \n valid options include: user@name.com, user@name.ca, user@name.io, user@name.xyz`,
    },

    user_id: {
      type: Number,
      required: [true, "Please Provide a User ID"],
      trim: true,
      unique: true,
      min: [1, "User ID must be Greater than 0"],
    },
  },
  { timestamps: true }
);

const Hotel = mongoose.model("Hotel", HotelSchema);
module.exports = Hotel;
