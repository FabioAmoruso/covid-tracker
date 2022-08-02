import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-country-chart',
  templateUrl: './country-chart.component.html',
  styleUrls: ['./country-chart.component.css']
})
export class CountryChartComponent implements OnInit, OnChanges {

  @Input() country: string = 'India';

  barChartData: ChartDataset[] = [
    {
      data: [],
      label: 'Confirmed cases'
    }
  ];
  barChartLabels: BaseChartDirective["labels"] = [];
  barChartOptions: ChartOptions = {
    responsive: true
  };
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.getCountryData();
  }

  getCountryData() {
    return this.dataService.getCountryDataByDate(this.country, '2020-03-01T00:00:00Z&to=2022-01-01T00:00:00Z')
      .subscribe((response: any) => {
        this.barChartData[0].data = response.map((obj: any) => obj['Cases']);
        this.barChartLabels = response.map((obj: any) => obj['Date'].substring(0, 10));
      });
  }
}
