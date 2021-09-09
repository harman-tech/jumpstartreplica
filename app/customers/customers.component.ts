import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { ICustomer, IPagedResults } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers:ICustomer[]=[];
  pageSize = 10;

  constructor( private dataService: DataService,) { }

  ngOnInit(): void {
   // this.getCustomersPage(1);
  }
  // getCustomersPage(page: number) {
  //   this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
  //       .subscribe((response: IPagedResults<ICustomer[]>) => {
  //         this.customers =response.results;
          
  //       },(err: any) => console.log(err),
  //       () => console.log('getCustomersPage() retrieved customers for page: ' + page));
      
  // }

}
