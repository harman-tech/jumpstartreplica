import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from '../guards/can-activate.guard';
//import { CanDeactivateGuard } from '../guards/can-deactivate.guard';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { CustomerComponent } from './customer/customer.component';
//import {AuthGuardserviceService as AuthGuard } from '../core/services/auth-guardservice.service';


const routes: Routes = [
  {
    path: "", component: CustomerComponent,
    children: [
      { path: "orders", component: CustomerOrderComponent },
      { path: "details", component: CustomerDetailsComponent },
      {
        path: "edit", component: CustomerEditComponent,
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CanActivateGuard,]
})
export class CustomerRoutingModule {
  static components = [CustomerComponent, CustomerOrderComponent, CustomerDetailsComponent, CustomerEditComponent];
}
