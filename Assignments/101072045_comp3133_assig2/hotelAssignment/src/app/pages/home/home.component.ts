import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { GetAllHotelsService } from '../../services/get-all-hotels.service';
import { IHotels } from '../../models/hotels';
@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomePageComponent implements OnInit {
  hotelList!: IHotels[];
  constructor(public auth: AuthService, private query: GetAllHotelsService) {}

  ngOnInit(): void {
    this.query.getAllHotels().subscribe((resp: any) => {
      this.hotelList = resp.data.getHotels;
    });
  }

  refresh() {
    return this.query.getLatest().refetch();
  }
}
