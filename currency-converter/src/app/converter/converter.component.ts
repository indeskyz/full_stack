import { Component, OnInit } from '@angular/core';
import {ExchangeRatesService} from '../services/exchange-rates.service';
@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent implements OnInit {
  amount: number = 1;
  from: string = 'CAD';
  to: string = 'USD';
  rates!: { [key: string]: number };
  base!: string;
  getAllCurrencies(): string[] {
    return Object.keys(this.rates);
  }
  convert(): number {
    return this.amount * this.rates[this.to];
  }

  loadRates() {
      this.service.getRates(this.from).subscribe((res) => {
      this.rates = res.rates;
      this.base = res.base;
      console.log(Object.values(this.rates));
      console.log(Object.keys(this.rates));
      console.log(this.base);
    });
  }
  constructor(private service: ExchangeRatesService) {}

  ngOnInit(): void {
    this.loadRates();
  }
}
