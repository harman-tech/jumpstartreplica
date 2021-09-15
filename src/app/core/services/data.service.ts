import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer, IOrder, IPagedResults } from 'src/app/shared/interfaces';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import { UtilitiesService } from '../services/utilities.service';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class DataService {

  baseUrl = ' http://localhost:3000/customers';

  orders: IOrder[] = [];


  constructor(private http: HttpClient) { }





  getCustomers() {
    return this.http.get<ICustomer[]>(this.baseUrl);
  }

  getCustomerById(id: number): Observable<ICustomer> {
    return this.http.get<ICustomer>(this.baseUrl + '/' + id)

  }
  updateCustomer(customer: ICustomer): Observable<any> {
    return this.http.put<ICustomer>(this.baseUrl + '/' + customer.id, customer)
     
}

}
