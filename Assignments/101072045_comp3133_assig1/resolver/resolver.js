const Hotel = require("../models/Hotel.js");
const Booking = require('../models/Bookings')
const User = require('../models/User')

exports.resolvers = {
  Query: {
    getHotels: async (parent, args) => {
      return await Hotel.find({});
    },
    getHotelByCity: async (parent, args) => {
      return await Hotel.find({city : args.city})
    },
    getHotelByName: async (parent, args) => {
      return await Hotel.find({hotel_name : args.hotel_name});
    },
    getHotelBooking: async (parent, args) => {
      return await Booking.find({});
    },
  },
  Mutation: {
    bookHotel: async (parent, args) => {
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
  }
};
