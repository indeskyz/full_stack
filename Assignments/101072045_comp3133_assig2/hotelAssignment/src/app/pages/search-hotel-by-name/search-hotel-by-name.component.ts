import { Component, OnInit } from '@angular/core';
import { IHotelByName } from '../../models/hotel-by-name';
import { Apollo } from 'apollo-angular';
import { FindHotelByNameService } from 'src/app/services/find-hotel-by-name.service';
@Component({
  selector: 'app-search-hotel-by-name',
  templateUrl: './search-hotel-by-name.component.html',
  styleUrls: ['./search-hotel-by-name.component.css'],
})
export class SearchHotelByNameComponent implements OnInit {
  hotelName!: string;
  hotelByNameList!: IHotelByName[];
  loading: boolean = false;
  hotelDetails: boolean = true;
  results: string = 'Results';
  resultsMsg: boolean = true;

  constructor(private apollo: Apollo, private query: FindHotelByNameService) {}

  ngOnInit(): void {}

  getHotelByName() {
    this.loading = !this.loading;
    this.apollo
      .query<IHotelByName[]>({
        query: this.query.getHotelByName,
        variables: {
          hotel_name: this.hotelName,
        },
        errorPolicy: 'all',
      })
      .subscribe((resp: any) => {
        this.hotelByNameList = resp.data.getHotelByName;
        if (this.hotelByNameList.length === 0) {
          this.results = 'No Matches Found';
          this.hotelDetails = true;
          this.resultsMsg = !this.resultsMsg;
        } else {
          this.hotelDetails = !this.hotelDetails;
          this.resultsMsg = !this.resultsMsg;
        }
        this.loading = !this.loading;
      });
  }
}
