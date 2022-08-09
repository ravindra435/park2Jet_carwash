import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { PurchaseCarwashComponent } from './purchase-carwash/purchase-carwash.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReviewPayComponent } from './review-pay/review-pay.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationlayoutComponent } from './reservationlayout/reservationlayout.component';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  declarations: [
    PurchaseCarwashComponent,
    UserInfoComponent,
    ReservationComponent,
    ReviewPayComponent,
    ReservationlayoutComponent,
    ConfirmComponent,
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ReservationModule {}
