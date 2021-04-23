import { Component, OnInit } from '@angular/core';
import { GetAllBookingsService } from '../../services/get-all-bookings.service';
import { IHotelBookings } from '../../models/hotel-bookings';
import { Subscription } from 'rxjs';
import { Apollo, QueryRef } from 'apollo-angular';

@Component({
  selector: 'app-view-bookings-page',
  templateUrl: './view-bookings-page.component.html',
  styleUrls: ['./view-bookings-page.component.css'],
})
export class ViewBookingsPageComponent implements OnInit {
  bookingsList!: IHotelBookings[];
  latestData!: QueryRef<any>;
  subscribeToLatest!: Subscription;

  constructor(private query: GetAllBookingsService, private apollo: Apollo) {}

  ngOnInit(): void {
    this.query.getHotelBookings().subscribe((resp: any) => {
      this.bookingsList = resp.data.getHotelBooking;
    });
    this.latestData = this.apollo.watchQuery({
      query: this.query.latestData,
      pollInterval: 500,
      errorPolicy: 'all',
    });
    this.subscribeToLatest = this.latestData.valueChanges.subscribe(
      ({ data }) => {
        this.bookingsList = data.getHotelBooking;
      }
    );
  }
}
