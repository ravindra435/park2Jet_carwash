import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyRoutingModule } from './body-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SharedModule } from '../shared/shared.module';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { ContactComponent } from './contact/contact.component';
import { JoinTeamComponent } from './join-team/join-team.component';
import { CommunityComponent } from './community/community.component';
import { GiftCardsComponent } from './gift-cards/gift-cards.component';
import { ShopComponent } from './shop/shop.component';
import { WashClubComponent } from './wash-club/wash-club.component';
import { SignupComponent } from './signup/signup.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonComponent } from './common/common.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MaindashboardComponent,
    ContactComponent,
    JoinTeamComponent,
    CommunityComponent,
    GiftCardsComponent,
    ShopComponent,
    WashClubComponent,
    SignupComponent,
    CommonComponent,
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class BodyModule {}
