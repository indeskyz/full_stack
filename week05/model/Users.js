const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    minlength: 4,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: [true, "Duplicate Email Not allowed"],
    trim: true,
    validate: function (value) {
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailRegex.test(value);
    },
    message: (props) => `${props.value} is invalid!`,
  },

  address: {
    street: {
      type: String,
      required: true,
      trim: true,
    },
    suite: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
      validate: function (v) {
        let alphabetCharactersOnly = /[a-zA-Z][a-zA-Z ]$/;
        return alphabetCharactersOnly.test(v);
      },
      message: (props) =>
        `${props.value} is not a valid format for the city name, only letters from a-z/A-Z are allowed`,
    },
    zipcode: {
      type: String,
      required: true,
      trim: true,
      validator: function (v) {
        let zipCodeSeperateByHypens = /^\d{5}(?:[-]\d{4})$/;
        return zipCodeSeperateByHypens.test(v);
      },
      message: (props) =>
        `${props.value} is invalid! zipcode should be formatted 90291-4439`,
    },

    geo: {
      lat: { type: Number, required: true, trim: true },
      lng: { type: Number, required: true, trim: true },
    },
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    validator: function (v) {
      let phoneNumberSperateByHypens = /^\b\d{3}[-]\d{3}[-]\d{4}\b$/;
      return phoneNumberSperateByHypens.test(v);
    },
    message: (props) =>
      `${props.value} is invalid! valid format is: 1-123-456-7890`,
  },
  website: {
    type: String,
    required: true,
    trim: true,
    validator: function (v) {
      let verifiyWebsite = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
      return verifiyWebsite.test(v);
    },
    message: (props) => `${props.value} is an invalid URL format`,
  },
  company: {
    name: { type: String, required: true, trim: true },
    catchPhrase: { type: String, required: true, trim: true },
    bs: { type: String, required: true, trim: true },
  },
});



const Users = mongoose.model("Users", UsersSchema)
module.exports = Users

