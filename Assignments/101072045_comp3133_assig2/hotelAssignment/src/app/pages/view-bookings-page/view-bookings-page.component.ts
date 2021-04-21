import { Component, OnInit } from '@angular/core';
import { GetAllBookingsService } from '../../services/get-all-bookings.service';
import { IHotelBookings } from '../../models/hotel-bookings';

@Component({
  selector: 'app-view-bookings-page',
  templateUrl: './view-bookings-page.component.html',
  styleUrls: ['./view-bookings-page.component.css'],
})
export class ViewBookingsPageComponent implements OnInit {
  bookingsList!: IHotelBookings[];
  constructor(private query: GetAllBookingsService) {}

  ngOnInit(): void {
    this.query.getHotelBookings().subscribe((resp: any) => {
      this.bookingsList = resp.data.getHotelBooking;
    });
  }
}
