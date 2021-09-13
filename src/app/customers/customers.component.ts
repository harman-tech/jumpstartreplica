import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { ICustomer, IPagedResults } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers:any;
  pageSize = 10;
  _filteredcustomers:ICustomer[]=[];
  displayMode!: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;


  get filteredCustomers() {
    return this._filteredcustomers;
  }

  set filteredCustomers(value: ICustomer[]) {
    this._filteredcustomers = value;
    
  }

  constructor( private dataService: DataService,) { 
    
  }

  ngOnInit(): void {
    this.displayMode = DisplayModeEnum.Card;
    this.getcustomers();
   // this.getCustomersPage(1);
  }
  getcustomers(){
    this.dataService.getCustomers().subscribe((response)=>{
      this.customers= response;
     
       console.log(this.customers);
    })
    
  }
  changeDisplayMode(mode: DisplayModeEnum) {
    this.displayMode = mode;
}
  // getCustomersPage(page: number) {
  //   this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
  //       .subscribe((response: IPagedResults<ICustomer[]>) => {
  //         this.customers =response.results;
          
  //       },(err: any) => console.log(err),
  //       () => console.log('getCustomersPage() retrieved customers for page: ' + page));
      
  // }

}
enum DisplayModeEnum {
  Card = 0,
  Grid = 1,
 
}