import { Injectable } from '@angular/core';
import { IHotelBookings } from '../models/hotel-bookings';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
@Injectable({
  providedIn: 'root',
})
export class GetAllBookingsService {
  latestData = gql`
    query {
      getHotelBooking {
        hotel_id
        booking_date
        booking_start
        booking_end
        user_id
      }
    }
  `;

  constructor(private apollo: Apollo) {}

  getHotelBookings() {
    return this.apollo.query<IHotelBookings[]>({
      query: gql`
        query {
          getHotelBooking {
            hotel_id
            booking_date
            booking_start
            booking_end
            user_id
          }
        }
      `,
      errorPolicy: 'all',
    });
  }
}
