import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmComponent } from './confirm/confirm.component';
import { PurchaseCarwashComponent } from './purchase-carwash/purchase-carwash.component';

import { ReservationComponent } from './reservation/reservation.component';
import { ReservationlayoutComponent } from './reservationlayout/reservationlayout.component';
import { ReviewPayComponent } from './review-pay/review-pay.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  {
    path: '',
    component: ReservationlayoutComponent,

    children: [
      // { path: '', redirectTo: 'reservation', pathMatch: 'full' },
      { path: 'reservation', component: ReservationlayoutComponent },
      { path: 'purchase', component: PurchaseCarwashComponent },
      { path: 'user/details', component: UserInfoComponent },
      { path: 'review/pay', component: ReviewPayComponent },
      { path: 'confirm', component: ConfirmComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationRoutingModule {}
