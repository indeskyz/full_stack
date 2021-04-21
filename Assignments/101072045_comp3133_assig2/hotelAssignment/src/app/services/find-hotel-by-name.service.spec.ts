import { TestBed } from '@angular/core/testing';

import { FindHotelByNameService } from './find-hotel-by-name.service';

describe('FindHotelByNameService', () => {
  let service: FindHotelByNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindHotelByNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
