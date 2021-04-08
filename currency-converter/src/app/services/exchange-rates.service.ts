import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ExchangeRatesResponse} from '../payloads/exchange-rates-response';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {
    
    baseURL:string = 'https://api.exchangeratesapi.io/latest?base=' 

  constructor(private http:HttpClient) { }

    getRates(params:string): Observable<ExchangeRatesResponse>{
            return this.http.get<ExchangeRatesResponse>(`${this.baseURL}${params}`);
    }
}
