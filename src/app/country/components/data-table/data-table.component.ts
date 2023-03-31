import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit ,OnChanges{
 @Input() dataCovid :any
  tableData:any[]=[]
  subscription=new Subscription();
  constructor(
    private searchService:SearchService
  ) { }

  ngOnInit(): void {
    this.subscription=this.searchService.getCountries().subscribe((data:any)=>{
      this.tableData=data;
    })
  }

  ngOnChanges(){
    this.tableData=this.dataCovid?.Countries
    console.log(this.tableData);
    
  }

  ngOnDestroy(){
  this.subscription.unsubscribe();
  }
}
