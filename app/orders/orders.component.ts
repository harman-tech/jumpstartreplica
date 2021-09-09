import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { ICustomer, IPagedResults } from '../shared/interfaces';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
 
  customers: ICustomer[]=[];
  totalRecords = 0;
  pageSize = 5;
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
  }
//   getCustomersPage(page: number) {
//     this.dataservice.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
//         .subscribe((response: IPagedResults<ICustomer[]>) => {
//             this.totalRecords = response.totalRecords;
//             this.customers = response.results;
//         });
// }

}
