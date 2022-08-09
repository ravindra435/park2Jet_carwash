import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCarwashComponent } from './purchase-carwash.component';

describe('PurchaseCarwashComponent', () => {
  let component: PurchaseCarwashComponent;
  let fixture: ComponentFixture<PurchaseCarwashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseCarwashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseCarwashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
