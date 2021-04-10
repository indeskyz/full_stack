import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMission } from '../models/mission';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SpacexapiService {
  baseURL: string = 'https://api.spacexdata.com/v3/launches';
  constructor(private http: HttpClient) {}

  getMission(): Observable<IMission[]> {
    return this.http.get<IMission[]>(this.baseURL);
  }

  getMissionDetails() {
    return this.http.get(this.baseURL);
  }
}
