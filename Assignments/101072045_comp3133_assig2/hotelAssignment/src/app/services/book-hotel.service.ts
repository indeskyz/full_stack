import { Injectable } from '@angular/core';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class BookHotelService {
  bookHotel = gql`
    mutation bookHotel(
      $hotel_id: ID!
      $booking_date: String!
      $booking_start: String!
      $booking_end: String!
      $user_id: Int!
    ) {
      bookHotel(
        hotel_id: $hotel_id
        booking_date: $booking_date
        booking_start: $booking_start
        booking_end: $booking_end
        user_id: $user_id
      ) {
        hotel_id
        booking_date
        booking_start
        booking_end
        user_id
      }
    }
  `;

  constructor() {}
}
