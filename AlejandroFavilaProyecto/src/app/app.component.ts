import { Component } from '@angular/core';
import{DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AlejandroFavilaCRUD';

  filterTerm: string = '';
  posts: any;
  constructor(private dataService: DataService){
    this.dataService.getData().subscribe(data => {
      this.posts = data;
    })
  }

  OnApplyFilter(event: any){
    this.filterTerm= event;
  }
}
