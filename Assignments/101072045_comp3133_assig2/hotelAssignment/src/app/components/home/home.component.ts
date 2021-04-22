import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  splashScreen: boolean = false;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.splashScreen = true;
    }, 2300);
  }
}
