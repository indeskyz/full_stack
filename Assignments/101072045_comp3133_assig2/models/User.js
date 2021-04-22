const mongoose = require("mongoose");
const { checkEmail, checkDate, checkPostalCode } = require("../helpers/regex");

const UserSchema = new mongoose.Schema(
  {
    user_id: {
      type: Number,
      required: [true, "A User ID Must be Provided"],
      trim: true,
      unique: true,
      min: [1, "User ID Must be Greater than 0"],
    },
    username: {
      type: String,
      required: [true, "A Username Must be Provided"],
      trim: true,
      unique: true,
      lowercase: true,
      minLength: [1, "Username Must be At Least 1 Character Long"],
      maxLength: [30, "Username Cannot Exceed 30 Characters"],
    },
    password: {
      type: String,
      required: [true, "Password Cannot be Blank"],
      trim: true,
      unique: true,
      lowercase: true,
      minLength: [5, "Passwords Must be Longer than 5 Characters"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: function (emailString) {
        return checkEmail.test(emailString);
      },
      message: (props) =>
        `${props.value} is an invalid email format. \n valid options include: user@name.com, user@name.ca, user@name.io, user@name.xyz`,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
