import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-contry-page',
  templateUrl: './contry-page.component.html',
  styleUrls: ['./contry-page.component.css']
})
export class ContryPageComponent implements OnInit {
  covidData:any;
  constructor(private dataService:DataService,
    private searchService:SearchService) { }

  ngOnInit(): void {
   this.dataService.getSummaryData()
   .subscribe((data:any)=>{
     this.covidData =data;
 }
 )
  }

  searchCountry(country:String){
    const countries=this.covidData.Countries?.filter((countries: any)=>countries?.Country
    .toLowerCase()
    .includes(country?.toLowerCase()));

   this.searchService.setCountries(countries);
    

  }


}
