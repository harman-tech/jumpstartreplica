import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerComponent } from './customer/customer.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerDetailsComponent,
    CustomerOrderComponent,
    CustomerEditComponent,
    CustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class CustomerModule { }
