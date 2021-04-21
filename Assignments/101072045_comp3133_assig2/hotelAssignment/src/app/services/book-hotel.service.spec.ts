import { TestBed } from '@angular/core/testing';

import { BookHotelService } from './book-hotel.service';

describe('BookHotelService', () => {
  let service: BookHotelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookHotelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
