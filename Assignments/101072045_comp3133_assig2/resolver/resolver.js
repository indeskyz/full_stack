const UserInputError = require("apollo-server-errors");
const { checkEmail, checkPostalCode, checkDate } = require("../helpers/regex");
const { validateField } = require("../helpers/errors");
const Hotel = require("../models/Hotel");
const Booking = require("../models/Booking");
const User = require("../models/User");

exports.resolvers = {
  Query: {
    getHotels: async (parent, args, info) => {
      return await Hotel.find({});
    },
    getHotelsOffset: async (parent, args, info) => {
      return await Hotel.find({ first: args.first, offset: args.offset });
    },
    getHotelByCity: async (parent, args) => {
      return await Hotel.find({ city: args.city });
    },
    getHotelByName: async (parent, args) => {
      return await Hotel.find({ hotel_name: args.hotel_name });
    },
    getHotelBooking: async (parent, args, info) => {
      return await Booking.find({});
    },
  },

  Mutation: {
    bookHotel: async (parent, args) => {
      validateField(
        args.booking_date,
        (bookingDate = "Originally Booked On"),
        checkDate
      );
      validateField(
        args.booking_start,
        (startDate = "Booking Start Date"),
        checkDate
      );
      validateField(
        args.booking_end,
        (endDate = "Booking End Date"),
        checkDate
      );
      if (args.hotel_id < 0) {
        throw new UserInputError("Error, Hotel ID must be greater than 0!");
      }
      let newBooking = new Booking({
        hotel_id: args.hotel_id,
        booking_date: args.booking_date,
        booking_start: args.booking_start,
        booking_end: args.booking_end,
        user_id: args.user_id,
      });
      return await newBooking.save();
    },
    createHotel: async (parent, args) => {
      validateField(args.email, (email = "email"), checkEmail);
      validateField(
        args.postal_code,
        (postalCode = "postal code"),
        checkPostalCode
      );
      if (args.hotel_id < 0) {
        throw new UserInputError("Error, Hotel ID must be greater than 0!");
      }
      let newHotel = new Hotel({
        hotel_id: args.hotel_id,
        hotel_name: args.hotel_name,
        street: args.street,
        city: args.city,
        postal_code: args.postal_code,
        price: args.price,
        email: args.email,
        user_id: args.user_id,
      });
      return await newHotel.save();
    },

    createUser: async (parent, args) => {
      let newUser = new User({
        user_id: args.user_id,
        username: args.username,
        password: args.password,
        email: args.email,
      });
      return await newUser.save();
    },
  },
};
