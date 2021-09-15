import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { ICustomer } from 'src/app/shared/interfaces';
import {IState} from 'src/app/shared/interfaces';
import { FormControl, FormGroup } from '@angular/forms'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  canDeactivate(): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  
  customer: ICustomer =
    {
      id: 0,
      firstName: '',
      lastName: '',
      gender: '',
      address: '',
      city: '',
     
    };
  states: IState[];
  errorMessage: string;
  deleteMessageEnabled: boolean;
  operationText = 'Insert';
  @ViewChild('customerForm', { static: true }) customerForm: NgForm;
  
  constructor(private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService,) { }

  ngOnInit(): void {
    this.route.parent.params.subscribe((params: Params) => {
      const id = +params['id'];
      if (id !== 0) {
       
        this.getCustomer(id);
      }
    });
  }
  getCustomer(id: number) {
    this.dataService.getCustomerById(id).subscribe((customer: ICustomer) => {
      this.customer = customer;
      
    });
  }
  submit(){
    // TODO: Use EventEmitter with form value
     this.dataService.updateCustomer(this.customer).subscribe((result)=>{
       console.log(result);
     });
      
}
}