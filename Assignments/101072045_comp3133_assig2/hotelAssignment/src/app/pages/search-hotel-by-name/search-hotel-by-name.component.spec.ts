import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHotelByNameComponent } from './search-hotel-by-name.component';

describe('SearchHotelByNameComponent', () => {
  let component: SearchHotelByNameComponent;
  let fixture: ComponentFixture<SearchHotelByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchHotelByNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHotelByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
