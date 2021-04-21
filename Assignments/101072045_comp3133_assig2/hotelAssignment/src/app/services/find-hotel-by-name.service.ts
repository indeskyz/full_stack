import { Injectable } from '@angular/core';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class FindHotelByNameService {
  getHotelByName = gql`
    query getHotelByName($hotel_name: String!) {
      getHotelByName(hotel_name: $hotel_name) {
        hotel_id
        hotel_name
        street
        postal_code
        price
        email
        city
      }
    }
  `;

  constructor() {}
}
