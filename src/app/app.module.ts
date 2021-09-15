import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { OrdersComponent } from './orders/orders.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CustomersModule } from './customers/customers.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterService } from './core/services/filter.service';
//import { SortDirective } from './shared/directive/sort.directive';
//import { SearchFilterComponent } from './shared/search-filter/search-filter.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    AboutComponent,
    OrdersComponent,
    FooterComponent,
    HeaderComponent,
    //SortDirective,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CustomersModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [ FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
