import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchValue = new EventEmitter();
  constructor() { }
  filterTerm= '';

  ngOnInit(): void {
  }

  onKey(event: any){
    this.searchValue.emit(this.filterTerm);
  }
}
