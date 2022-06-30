import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ExperienceComponent } from './components/Life-Style/experience/experience.component';
import { ResortActivitiesComponent } from './components/Life-Style/resort-activities/resort-activities.component';
import { WellnessComponent } from './components/Life-Style/wellness/wellness.component';
import { CelebrationComponent } from './components/celebration/celebration.component';
import { WeddingComponent } from './components/celebration/wedding/wedding.component';
import { SpecialWeddingComponent } from './components/celebration/wedding/special-wedding/special-wedding.component';
import { OffersComponent } from './components/offers/offers.component';
import { FoodBeverageComponent } from './components/food-beverage/food-beverage.component';
import { AccomerdationComponent } from './components/accomerdation/accomerdation.component';
import { RoomsBookingComponent } from './components/rooms-booking/rooms-booking.component';
import { AdminPanelComponent } from './DashBoard/admin-panel/admin-panel.component';
import { UserPanelComponent } from './DashBoard/user-panel/user-panel.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'home',
    component: HomeComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'profile',
    component: ProfileComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path:'contact',
    component:ContactUsComponent
  },
  {
    path:'expericence',
    component:ExperienceComponent
  },
  {
    path:'resort-activites',
    component:ResortActivitiesComponent
  },
  {
    path:'wellness',
    component:WellnessComponent
  },
  {
    path:'Celebrtion',
    component:CelebrationComponent
  },
  {
    path:'Wedding',
    component:WeddingComponent
  },
  {
    path:'Our Bridal Suite',
    component:SpecialWeddingComponent
  },
  {
    path:'offers',
    component:OffersComponent
  },
  {
    path:'Food-beverage',
    component: FoodBeverageComponent
  },
  {
    path:'accomerdation',
    component:AccomerdationComponent
  },
  {
    path:'Booking',
    component:RoomsBookingComponent
  },
  {
    path:'Admin-panel',
    component:AdminPanelComponent
  },
  {
    path:'user-panel',
    component:UserPanelComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
