import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicNavbarComponent } from './components/public-navbar/public-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupModalComponent } from './components/signup-modal/signup-modal.component';
import { LandingComponent } from './components/landing/landing.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';




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
        { path: '', component: LandingComponent }
    ]),
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule
]
})
export class LandingModule { }
