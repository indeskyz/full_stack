import { Injectable } from '@angular/core';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class FindHotelByCityService {
  getHotelByCity = gql`
    query getHotelByCity($city: String!) {
      getHotelByCity(city: $city) {
        hotel_id
        hotel_name
        street
        postal_code
        price
        email
      }
    }
  `;

  constructor() {}
}
