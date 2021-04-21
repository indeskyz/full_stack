import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from 'src/app/pages/home/home.component';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { ExternalApiComponent } from 'src/app/pages/external-api/external-api.component';
import { BookingPageComponent } from 'src/app/pages/booking-page/booking-page.component';
import { ViewBookingsPageComponent } from 'src/app/pages/view-bookings-page/view-bookings-page.component';

import { AuthGuard } from '@auth0/auth0-angular';
const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  },

  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'external-api',
    component: ExternalApiComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'booking-page',
    component: BookingPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'view-bookings-page',
    component: ViewBookingsPageComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
