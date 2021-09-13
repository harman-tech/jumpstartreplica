import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { IOrder, ICustomer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {
  orders: IOrder[] = [];
  customer: any;
  sub: any;
  id: any;
  constructor(private service: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.snapshot.params('id');


    const id: string = this.route.snapshot.params.id;
    console.log(id);
    //const url: string = route.snapshot.url.join('');

    //const user = route.snapshot.data.user;




    // this.service.getCustomerById(this.id).subscribe((customer: ICustomer) => {
    //   this.customer = customer;
    //   console.log(this.customer)


  }

}
