const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true,
    trim: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    unqiue: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unqiue: true,
    validate: function (value) {
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailRegex.test(value);
    },
    message: (props) => `${props.value} is invalid!`,
  },
});

const Users = mongoose.model("Users", UserSchema);
module.exports = Users
