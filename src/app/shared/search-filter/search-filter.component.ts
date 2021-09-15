import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { ICustomer } from '../interfaces';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {
  
   customers:any;
   model: { filter: string } = { filter: null };

   @Output()
   changed: EventEmitter<string> = new EventEmitter<string>();

   filterChanged(event: any) {
   event.preventDefault();
     this.changed.emit(this.model.filter); // Raise changed event
   }
  //  _filteredCustomers:ICustomer;
  //  private _searchTerm:string;
  //  get searchTerm():any{
  //     return this._searchTerm;
  //  }
  // set searchTerm(value:any){
  //    this._searchTerm=value;
  //    this._filteredCustomers=this.filteredCustomers(value);

  //  }
  //  filteredCustomers(searchString:string){
  //   return this.customers.filter((customer:any)=>customer.firstName.toLowerCase().indexOf(searchString.toLowerCase())!==-1);
  // }
  constructor(private service:DataService) {
    // this.service.getCustomers().subscribe((result)=>{
    //   this.customers=result;
    // })
   }
  
  ngOnInit(): void {
    //this._filteredCustomers=this.customers;
  }
   
  }

