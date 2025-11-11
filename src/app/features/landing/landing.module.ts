import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicNavbarComponent } from './components/public-navbar/public-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupModalComponent } from './components/signup-modal/signup-modal.component';
import { LandingComponent } from './components/landing/landing.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PublicNavbarComponent,
    FooterComponent,
    SignupModalComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: LandingComponent}
    ])
  ]
})
export class LandingModule { }
