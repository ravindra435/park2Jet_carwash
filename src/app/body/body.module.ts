import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyRoutingModule } from './body-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SharedModule } from '../shared/shared.module';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [DashboardComponent, MaindashboardComponent, ContactComponent],
  imports: [CommonModule, BodyRoutingModule, SharedModule],
})
export class BodyModule {}
