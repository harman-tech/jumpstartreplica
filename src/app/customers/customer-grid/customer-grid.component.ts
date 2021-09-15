import { ChangeDetectionStrategy, Component,Input, OnInit } from '@angular/core';
import { SorterService } from 'src/app/core/services/sorter.service';
import { ICustomer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customer-grid',
  templateUrl: './customer-grid.component.html',
  styleUrls: ['./customer-grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerGridComponent implements OnInit {
  @Input() customers: ICustomer[] = [];
  p: any = 1;
  count: any = 5;
  

  constructor(private sorterservice:SorterService) { }

  ngOnInit(): void {
  }
 

}
