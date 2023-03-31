import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {
 covidData:any;
 countryToSearch='';

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getSummaryData().subscribe((data)=>{
      this.covidData=data;
      console.log(this.covidData);
    })
  }
  searchCountry(searchTerm:any){
   this.countryToSearch=searchTerm;
  }

}
