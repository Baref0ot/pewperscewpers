import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicNavbarComponent } from './components/public-navbar/public-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupModalComponent } from './components/signup-modal/signup-modal.component';
import { LandingComponent } from './components/landing/landing.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PublicNavbarComponent,
    SignupModalComponent,
    LandingComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LandingComponent }
    ]),
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
],
  exports: [
    PublicNavbarComponent,
    LandingComponent,
    FooterComponent
  ]
})
export class LandingModule { }
