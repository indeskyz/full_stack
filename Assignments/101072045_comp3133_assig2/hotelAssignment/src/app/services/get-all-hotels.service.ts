import { Injectable } from '@angular/core';
import { IHotels } from '../models/hotels';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class GetAllHotelsService {
  getLatest = gql`
    query {
      getHotels {
        hotel_id
        hotel_name
        street
        postal_code
        price
        email
        user_id
      }
    }
  `;
  getHotelsOffset = gql`
    query getHotelsOffset($first: Int!, $offset: Int!) {
      getHotelsOffset(first: $first, offset: $offset) {
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
  constructor(private apollo: Apollo) {}

  getAllHotels() {
    return this.apollo.query<IHotels[]>({
      query: gql`
        query {
          getHotels {
            hotel_id
            hotel_name
            street
            postal_code
            price
            email
            user_id
          }
        }
      `,
      errorPolicy: 'all',
    });
  }
}
