import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-top-countries',
  templateUrl: './top-countries.component.html',
  styleUrls: ['./top-countries.component.css']
})
export class TopCountriesComponent implements OnInit, OnChanges {

  @Input() covidData: any;
  topConfirmed: any[];
  topDeaths: any[];
  topRecovered: any[];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.topConfirmed = this.covidData.Countries?.
    sort((a: any, b: any) => b.TotalConfirmed - a.TotalConfirmed).slice(0, 5);

    this.topDeaths = this.covidData.Countries?.
    sort((a: any, b: any) => b.TotalDeaths - a.TotalDeaths).slice(0, 5);

    this.topRecovered = this.covidData.Countries?.
    sort((a: any, b: any) => b.TotalRecovered - a.TotalRecovered).slice(0, 5);
    
  }
}
