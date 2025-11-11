import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';



@NgModule({
  declarations: [
    CustomerFormComponent,
    CustomerDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomersModule { }
