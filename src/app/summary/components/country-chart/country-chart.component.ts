import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-country-chart',
  templateUrl: './country-chart.component.html',
  styleUrls: ['./country-chart.component.css']
})
export class CountryChartComponent implements OnInit,OnChanges {
  @Input() country:string='India'



barChartData:ChartDataSets[]=[{
  data:[],
  label:'Confirmed cases'
}]
barChartLabels:Label[]=[]
barChartOptions:ChartOptions={
  responsive:true
}
barChartType:ChartType='bar';
barChartLegend=true
barChartPlugins=[]

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.getCountryCountData();
  }

  getCountryCountData(){
    this.dataService.getCountryDataByDate(this.country,'2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z').
    subscribe((data:any)=>{
      this.barChartData[0].data= data.map((obj:any)=>obj['Cases'])
      this.barChartLabels=data.map((obj:any)=>obj['Date'].substring(0,10));
     console.log(this.barChartData);
     console.log(data);
     
     
    })
  }
}
