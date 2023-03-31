import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { from, take } from 'rxjs';

@Component({
  selector: 'app-top-countries',
  templateUrl: './top-countries.component.html',
  styleUrls: ['./top-countries.component.css']
})
export class TopCountriesComponent implements OnInit ,OnChanges {


  @Input() covidData:any;
  topConfirmedCases:any[]=[]
  topConfirmedDeaths:any[]=[]
  topConfirmedRecovered:any[]=[]
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.topConfirmedCases=this.covidData?.Countries 
    ?.sort((a:any, b:any)=>
    b.TotalConfirmed - a.TotalConfirmed).slice(0,5);

    //this.topConfirmedDeaths=from(this.covidData?.Countries ?.sort((a:any, b:any)=>
    //b.TotalConfirmed - a.TotalConfirmed)).pipe(take(5)).subscribe(data=> console.log(data));
   
   this.topConfirmedDeaths=this.covidData?.Countries 
   ?.sort((a:any, b:any)=>
   b.TotalDeaths-a.TotalDeaths).slice(0,5);

   this.topConfirmedRecovered=this.covidData?.Countries 
   ?.sort((a:any, b:any)=>
   b.TotalRecovered-a.TotalRecovered).slice(0,5);

  }

  
}
