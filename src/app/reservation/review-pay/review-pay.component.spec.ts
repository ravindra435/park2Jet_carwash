import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPayComponent } from './review-pay.component';

describe('ReviewPayComponent', () => {
  let component: ReviewPayComponent;
  let fixture: ComponentFixture<ReviewPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewPayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
