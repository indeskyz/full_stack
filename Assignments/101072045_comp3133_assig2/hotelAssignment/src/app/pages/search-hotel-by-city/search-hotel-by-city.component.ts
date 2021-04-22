import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { FindHotelByCityService } from '../../services/find-hotel-by-city.service';
import { IHotelByCity } from '../../models/hotel-by-city';
@Component({
  selector: 'app-search-hotel-by-city',
  templateUrl: './search-hotel-by-city.component.html',
  styleUrls: ['./search-hotel-by-city.component.css'],
})
export class SearchHotelByCityComponent implements OnInit {
  city!: string;
  hotelByCityList!: IHotelByCity[];
  loading: boolean = false;
  hotelDetails: boolean = true;
  results: string = 'Results';
  constructor(private apollo: Apollo, private query: FindHotelByCityService) {}

  ngOnInit(): void {}

  getHotelByCity() {
    this.loading = !this.loading;
    this.apollo
      .query<IHotelByCity[]>({
        query: this.query.getHotelByCity,
        variables: {
          city: this.city,
        },
        errorPolicy: 'all',
      })
      .subscribe((resp: any) => {
        this.hotelByCityList = resp.data.getHotelByCity;
        if (this.hotelByCityList.length === 0) {
          this.results = 'No Matches Found';
        }

        this.loading = !this.loading;
        this.hotelDetails = !this.hotelDetails;
      });
  }
}
