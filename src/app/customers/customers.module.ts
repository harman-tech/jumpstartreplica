import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerGridComponent } from './customer-grid/customer-grid.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomersComponent } from './customers.component';
import { DataService } from '../core/services/data.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchFilterComponent } from '../shared/search-filter/search-filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomerGridComponent,
    CustomerCardComponent,
    SearchFilterComponent
    
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers:[DataService]
})
export class CustomersModule { }
