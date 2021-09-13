import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { ICustomer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer: any;

  constructor(private route: ActivatedRoute, 
    private dataService: DataService,) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = +params['id'];
      if (id) {
        this.dataService.getCustomerById(id)
          .subscribe((customer: ICustomer) => {
            this.customer = customer;
            
          });
      }
    });
  }

}
