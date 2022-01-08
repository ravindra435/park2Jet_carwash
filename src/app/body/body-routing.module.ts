import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './community/community.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GiftCardsComponent } from './gift-cards/gift-cards.component';
import { JoinTeamComponent } from './join-team/join-team.component';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { ShopComponent } from './shop/shop.component';
import { SignupComponent } from './signup/signup.component';
import { WashClubComponent } from './wash-club/wash-club.component';

const routes: Routes = [
  {
    path: '',
    component: MaindashboardComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'community', component: CommunityComponent },
      { path: 'join-the-team', component: JoinTeamComponent },
      { path: 'gift-cards', component: GiftCardsComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'unlimited', component: WashClubComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BodyRoutingModule {}
