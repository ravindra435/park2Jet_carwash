import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationlayoutComponent } from './reservationlayout.component';

describe('ReservationlayoutComponent', () => {
  let component: ReservationlayoutComponent;
  let fixture: ComponentFixture<ReservationlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationlayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
