import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { GetAllHotelsService } from '../../services/get-all-hotels.service';
import { IHotels } from '../../models/hotels';
import { Apollo, QueryRef } from 'apollo-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomePageComponent implements OnInit {
  hotelList!: IHotels[];
  latestData!: QueryRef<any>;
  latestSubscription!: Subscription;
  first: number = 1;
  offset: number = 1;
  constructor(
    public auth: AuthService,
    private query: GetAllHotelsService,
    private apollo: Apollo
  ) {}

  ngOnInit(): void {
    this.apollo
      .query({
        query: this.query.getHotelsOffset,
        variables: {
          first: this.first,
          offset: this.offset,
        },
        errorPolicy: 'all',
      })
      .subscribe((resp: any) => {
        this.hotelList = resp.data.getHotelsOffset;
        console.log(resp.data);
      });

    this.query.getAllHotels().subscribe((resp: any) => {
      this.hotelList = resp.data.getHotels;
    });
    this.latestData = this.apollo.watchQuery({
      query: this.query.getLatest,
      pollInterval: 1000,
      errorPolicy: 'all',
    });
    this.latestSubscription = this.latestData.valueChanges.subscribe(
      ({ data }) => {
        this.hotelList = data.getHotels;
      }
    );
  }

  refresh() {
    this.latestData.refetch();
  }

  ngOnDestroy() {
    this.latestSubscription.unsubscribe();
  }
}
