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
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxSpinnerModule } from 'ngx-spinner';
import { QrCodeModule } from 'ng-qrcode';

@NgModule({
  declarations: [
    PurchaseCarwashComponent,
    UserInfoComponent,
    ReservationComponent,
    ReviewPayComponent,
    ReservationlayoutComponent,
    ConfirmComponent,
    ReservationDetailsComponent,
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    NgxSpinnerModule,
    QrCodeModule
  ],
})
export class ReservationModule {}
