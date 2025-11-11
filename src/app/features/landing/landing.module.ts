import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicNavbarComponent } from './components/public-navbar/public-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupModalComponent } from './components/signup-modal/signup-modal.component';



@NgModule({
  declarations: [
    PublicNavbarComponent,
    FooterComponent,
    SignupModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingModule { }
