import { TestBed } from '@angular/core/testing';

import { FindHotelByCityService } from './find-hotel-by-city.service';

describe('FindHotelByCityService', () => {
  let service: FindHotelByCityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindHotelByCityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
