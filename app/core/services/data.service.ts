import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer, IOrder, IPagedResults } from 'src/app/shared/interfaces';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UtilitiesService } from '../services/utilities.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = this.utilityservice.getApiUrl();
  customersBaseUrl = this.baseUrl + '/api/customers';
  ordersBaseUrl = this.baseUrl + '/api/orders';
  orders: IOrder[] = [];


  constructor(private http: HttpClient, private utilityservice: UtilitiesService) { }

  // getCustomersPage(page: number, pageSize: number): Observable<IPagedResults<ICustomer[]>> {
  //   return this.http.get<ICustomer[]>(
  //     `${this.customersBaseUrl}/page/${page}/${pageSize}`,
  //     { observe: 'response' })
  //     .pipe(
  //       map(res => {
  //         //const totalRecords = +res.headers.get('X-InlineCount'); //error
  //         const customers = res.body as ICustomer[];
  //         this.calculateCustomersOrderTotal(customers);
  //         return {
  //           results: customers,
  //           //totalRecords: totalRecords
  //         };
  //       }),
  //       catchError(this.handleError)
  //     );
  // }



  getCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.customersBaseUrl)
      .pipe(
        map(customers => {
          this.calculateCustomersOrderTotal(customers);
          return customers;
        }),

      );
  }
  calculateCustomersOrderTotal(customers: ICustomer[]) {
    for (const customer of customers) {
      if (customer && customer.orders) {
        let total = 0;
        for (const order of customer.orders) {
          total += order.itemCost;
        }
        customer.orderTotal = total;
      }
    }
  }
  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
        const errMessage = error.error.message;
        return Observable.throw(errMessage);
        // Use the following instead if using lite-server
        // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'Node.js server error');
}

}
