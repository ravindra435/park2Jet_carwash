import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaindashboardComponent } from './body/maindashboard/maindashboard.component';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () =>
      import('./body/body.module').then((module) => module.BodyModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
