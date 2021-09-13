import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { ICustomer, IPagedResults } from '../shared/interfaces';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
 
  customers: any;
  
  constructor(private dataservice:DataService) {
    this.getcustomers();
   }

  ngOnInit(): void {
  }
  getcustomers(){
    this.dataservice.getCustomers().subscribe((response)=>{
      this.customers= response;
     
       console.log(this.customers);
    })

}
}