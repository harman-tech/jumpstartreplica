import { Component, OnInit, Input } from '@angular/core';
import { ICustomer } from '../../shared/interfaces';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';


@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {
  
  @Input() customers: ICustomer[] = [];
  p: any = 1;
  count: any = 5;
  
  constructor( private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
  


} 
}