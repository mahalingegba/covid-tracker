import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirmed-by-country',
  templateUrl: './confirmed-by-country.component.html',
  styleUrls: ['./confirmed-by-country.component.css']
})
export class ConfirmedByCountryComponent implements OnInit {

  @Output() country=new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }


  passCountryData(searchTerm:any){
    console.log(searchTerm);
    this.country.emit(searchTerm);
    

  }
}
