import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HomePageComponent } from './pages/home/home.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { SignUpButtonComponent } from './components/sign-up-button/sign-up-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { AuthNavComponent } from './components/auth-nav/auth-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ExternalApiComponent } from './pages/external-api/external-api.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import { GraphQLModule } from './graphql.module';
import { BookingPageComponent } from './pages/booking-page/booking-page.component';
import { ViewBookingsPageComponent } from './pages/view-bookings-page/view-bookings-page.component';
import { SearchHotelByNameComponent } from './pages/search-hotel-by-name/search-hotel-by-name.component';
import { SearchHotelByCityComponent } from './pages/search-hotel-by-city/search-hotel-by-city.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomePageComponent,
    MainNavComponent,
    NavBarComponent,
    LoadingComponent,
    LoginButtonComponent,
    SignUpButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,
    AuthNavComponent,
    FooterComponent,
    ProfileComponent,
    ExternalApiComponent,
    BookingPageComponent,
    ViewBookingsPageComponent,
    SearchHotelByNameComponent,
    SearchHotelByCityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        allowedList: [`${env.dev.serverUrl}/messages/protected-message`],
      },
    }),
    GraphQLModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatFormFieldModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
