import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTask4';
  constructor(private data:DataService){}

  restCountryData: any;
  ngOnInit(): void {

    this.data.getRestCountires().subscribe(data => {
      this.restCountryData = data
      console.log(this.restCountryData);
    }
  );

  }

}
