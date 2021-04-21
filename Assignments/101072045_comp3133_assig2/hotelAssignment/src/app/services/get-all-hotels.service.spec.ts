import { TestBed } from '@angular/core/testing';

import { GetAllHotelsService } from './get-all-hotels.service';

describe('GetAllHotelsService', () => {
  let service: GetAllHotelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllHotelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
