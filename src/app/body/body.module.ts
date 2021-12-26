import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyRoutingModule } from './body-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule
  ]
})
export class BodyModule { }
