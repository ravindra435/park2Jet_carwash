import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashClubComponent } from './wash-club.component';

describe('WashClubComponent', () => {
  let component: WashClubComponent;
  let fixture: ComponentFixture<WashClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WashClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WashClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
