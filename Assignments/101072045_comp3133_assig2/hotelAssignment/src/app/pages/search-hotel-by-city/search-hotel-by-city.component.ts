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
  hotelDetails: boolean = true;
  results: string = 'Results';
  queryResults: boolean = true;
  constructor(private apollo: Apollo, private query: FindHotelByCityService) {}

  ngOnInit(): void {}

  getHotelByCity() {
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
          this.queryResults = !this.queryResults;
        } else {
          this.hotelDetails = !this.hotelDetails;
          this.queryResults = !this.queryResults;
        }
      });
  }
}
