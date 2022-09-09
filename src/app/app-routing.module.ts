import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaindashboardComponent } from './body/maindashboard/maindashboard.component';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () =>
      import('./body/body.module').then((module) => module.BodyModule),
  },
  {
    path: 'reservation',
    loadChildren: () =>
      import('./reservation/reservation.module').then(
        (module) => module.ReservationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
