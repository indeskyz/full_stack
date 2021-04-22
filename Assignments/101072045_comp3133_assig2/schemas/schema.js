const { gql } = require("apollo-server-express");

exports.typeDefs = gql`
  type Hotel @cacheControl(maxAge: 300) {
    hotel_id: ID!
    hotel_name: String!
    street: String!
    city: String!
    postal_code: String!
    price: Int!
    email: String!
    user_id: Int!
    bookings: [hotelBooking]
  }

  type hotelBooking {
    hotel_id: ID!
    booking_date: String!
    booking_start: String!
    booking_end: String!
    user_id: Int!
  }

  type User {
    user_id: ID!
    username: String!
    password: String!
    email: String!
  }

  type FeedItem {
    id: ID!
    message: String!
  }

  type Query {
    getHotelsOffset(first: Int!, offset: Int!): [Hotel]
    getHotels: [Hotel]
    getHotelByName(hotel_name: String!): [Hotel]
    getHotelByCity(city: String!): [Hotel]
    getHotelBooking: [hotelBooking]
  }

  type Mutation {
    bookHotel(
      hotel_id: ID!
      booking_date: String!
      booking_start: String!
      booking_end: String!
      user_id: Int!
    ): hotelBooking

    createHotel(
      hotel_id: ID!
      hotel_name: String!
      street: String!
      city: String!
      postal_code: String!
      price: Int!
      email: String!
      user_id: Int!
    ): Hotel

    createUser(
      user_id: ID!
      username: String!
      password: String!
      email: String!
    ): User
  }
`;
