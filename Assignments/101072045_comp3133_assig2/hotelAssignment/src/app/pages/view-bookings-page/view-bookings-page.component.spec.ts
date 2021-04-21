import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookingsPageComponent } from './view-bookings-page.component';

describe('ViewBookingsPageComponent', () => {
  let component: ViewBookingsPageComponent;
  let fixture: ComponentFixture<ViewBookingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBookingsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
