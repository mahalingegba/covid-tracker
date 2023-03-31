import { Component, OnInit } from '@angular/core';

 import * as Highcharts from 'highcharts/highmaps'
 import * as worldMap from '@highcharts/map-collection/custom/world.geo.json'
import { DataService } from 'src/app/shared/services/data.service';
import { log } from 'console';
@Component({
  selector: 'app-live-page',
  templateUrl: './live-page.component.html',
  styleUrls: ['./live-page.component.css']
})
export class LivePageComponent implements OnInit {

  constructor(private dataService:DataService) { }
    livedata:any[]=[]
  Highcharts:typeof Highcharts =Highcharts;
  chartConstructor ='mapChart'

 chartOptions:Highcharts.Options |any ={
  chart:{
    map:worldMap
  },
  title:{
    text:'COVID-19 World Data'
  },
  subtitle:{
    text:'Confirmed Cases'
  },
  mapNavigation:{
    enabled:true,
    buttonOptions:{
      allignTo:'spacingBox'
    }
  },
  legend:{
    enabled:true,
  },
  colorAxis:{
    min:0
  },
  series :[{
    type:'map',
    name:'COVID -19 Data',
    states:{
      hover:{
        color:'#dc3545'
      }
    },
    dataLabels:{
      enabled:true,
      format:'{point.name}'
    },
    allAreas:false,
    data:[]
  }]
 }

  
  ngOnInit(): void {
    this.dataService.getSummaryData().subscribe((data:any)=>{
     console.log(data);
     this.livedata=data.Countries.map((country:any)=>[country.CountryCode.toLowerCase(),
      country.TotalConfirmed])
      console.log(this.livedata);
     
      this.chartOptions.series[0].data=this.livedata;

      this.Highcharts.mapChart('container',this.chartOptions)
  
    },
    (err:any)=>{
   console.log(err);
  }
  
  )
  }

}
