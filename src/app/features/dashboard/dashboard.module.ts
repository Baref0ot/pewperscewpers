import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard.component';
import { RouterModule } from '@angular/router';
//import { CoreModule } from "src/app/core/core.module";




@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DashboardComponent }])
]
})
export class DashboardModule { }
