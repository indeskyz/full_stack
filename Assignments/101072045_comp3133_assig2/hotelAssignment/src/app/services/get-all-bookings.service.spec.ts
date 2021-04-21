import { TestBed } from '@angular/core/testing';

import { GetAllBookingsService } from './get-all-bookings.service';

describe('GetAllBookingsService', () => {
  let service: GetAllBookingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllBookingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
