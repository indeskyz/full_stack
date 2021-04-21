import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { BookHotelService } from '../../services/book-hotel.service';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css'],
})
export class BookingPageComponent implements OnInit {
  hotel_id!: number;
  booking_date!: string;
  booking_start!: string;
  booking_end!: string;
  user_id!: number;
  loading = false;
  createdBookingMsg = true;

  constructor(private apollo: Apollo, private mutate: BookHotelService) {}

  ngOnInit(): void {}
  createBooking() {
    this.loading = !this.loading;
    this.apollo
      .mutate({
        mutation: this.mutate.bookHotel,
        variables: {
          hotel_id: this.hotel_id,
          booking_date: this.booking_date,
          booking_start: this.booking_start,
          booking_end: this.booking_end,
          user_id: this.user_id,
        },
      })
      .subscribe((resp) => {
        console.log(resp);
        this.loading = !this.loading;
        this.createdBookingMsg = !this.createdBookingMsg;
      });
  }
}
