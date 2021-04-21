import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHotelByCityComponent } from './search-hotel-by-city.component';

describe('SearchHotelByCityComponent', () => {
  let component: SearchHotelByCityComponent;
  let fixture: ComponentFixture<SearchHotelByCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchHotelByCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHotelByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
