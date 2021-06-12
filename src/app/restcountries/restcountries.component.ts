import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-restcountries',
  templateUrl: './restcountries.component.html',
  styleUrls: ['./restcountries.component.css']
})
export class RestcountriesComponent implements OnInit {

  @Input('name') name = "";
  @Input('region') region = "";
  @Input('population') population = "";
  @Input('flag') flag = "";
  constructor(private data:DataService) { }
  restCountryData:any;

  ngOnInit(): void {


  }

}
