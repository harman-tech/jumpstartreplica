import { Component,Input, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customer-grid',
  templateUrl: './customer-grid.component.html',
  styleUrls: ['./customer-grid.component.css']
})
export class CustomerGridComponent implements OnInit {
  @Input() customers: ICustomer[] = [];
  p: any = 1;
  count: any = 5;
  

  constructor() { }

  ngOnInit(): void {
  }

}
