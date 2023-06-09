import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchTerm: string ='';
@Output() countryToSearch =new EventEmitter<string>();
  constructor() { }
  ngOnInit(): void {
  }

  search(){
    this.countryToSearch.emit(this.searchTerm);
    console.log(this.searchTerm);
    
  }
}
