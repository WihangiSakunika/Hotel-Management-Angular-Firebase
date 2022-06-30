import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp, } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { HotToastModule } from '@ngneat/hot-toast';
import { LandingComponent } from './components/landing/landing.component';
import { MatMenuModule } from '@angular/material/menu';
import { ProfileComponent } from './components/profile/profile.component';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { NavtabsComponent } from './Navigation/navtabs/navtabs.component';
import { SidenavComponent } from './Navigation/sidenav/sidenav.component';
import { FooterComponent } from './Navigation/footer/footer.component';
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
import { UserPanelComponent } from './DashBoard/user-panel/user-panel.component';
import { AdminPanelComponent } from './DashBoard/admin-panel/admin-panel.component';
import { BookingService } from './services/booking.service';

//Material is here
import { FlexLayoutModule } from "@angular/flex-layout";
import { HeaderComponent } from './Navigation/header/header.component';
import {MatBadgeModule } from '@angular/material/badge';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    LandingComponent,
    HomeComponent,
    ProfileComponent,
    HeaderComponent,
    NavtabsComponent,
    SidenavComponent,
    FooterComponent,
    ContactUsComponent,
    ExperienceComponent,
    ResortActivitiesComponent,
    WellnessComponent,
    CelebrationComponent,
    WeddingComponent,
    SpecialWeddingComponent,
    OffersComponent,
    FoodBeverageComponent,
    AccomerdationComponent,
    RoomsBookingComponent,
    UserPanelComponent,
    AdminPanelComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    HotToastModule.forRoot(),
    MatMenuModule,
    MatCardModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatTabsModule,
    MatGridListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatAutocompleteModule,
    
  ],
  providers: [BookingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
