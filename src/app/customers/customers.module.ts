import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerGridComponent } from './customer-grid/customer-grid.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomersComponent } from './customers.component';
import { DataService } from '../core/services/data.service';
import { NgxPaginationModule } from 'ngx-pagination'


@NgModule({
  declarations: [
    CustomersComponent,
    CustomerGridComponent,
    CustomerCardComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    NgxPaginationModule
    
  ],
  providers:[DataService]
})
export class CustomersModule { }
