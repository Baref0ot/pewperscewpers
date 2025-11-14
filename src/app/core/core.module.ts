import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../layout/layout.component';
import { LandingModule } from '../features/landing/landing.module'; 
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LandingModule,
    SharedModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class CoreModule {}
