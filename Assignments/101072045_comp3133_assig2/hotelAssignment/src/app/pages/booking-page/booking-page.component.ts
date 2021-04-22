import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { BookHotelService } from '../../services/book-hotel.service';
import { ErrorClass } from '../../models/error-class';

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
  loading: boolean = false;
  createdBookingMsg = true;
  dateRegex = /^(?:(?:(?:0?[13578]|1[02])(\/|-|\.)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/|-|\.)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:0?2(\/|-|\.)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  validate: ErrorClass = new ErrorClass();

  constructor(private apollo: Apollo, private mutate: BookHotelService) {}

  ngOnInit(): void {}
  createBooking() {
    this.sanitizeInput(this.booking_date);
    this.sanitizeInput(this.booking_start);
    this.sanitizeInput(this.booking_end);
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
        errorPolicy: 'all',
      })
      .subscribe((resp) => {
        console.log(resp);
        this.loading = !this.loading;
      });
  }

  sanitizeInput(dateToValidate: any) {
    if (this.validate.dateValidator(this.dateRegex, dateToValidate)) {
      this.createdBookingMsg = !this.createdBookingMsg;
    }
  }
}
