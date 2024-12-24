import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts/highmaps';
import indiaMap from '@highcharts/map-collection/countries/in/custom/in-all-disputed.geo.json';

@Component({
  selector: 'app-dashboard',
  imports: [FontAwesomeModule,HighchartsChartModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

faHome = faHome;

router = inject(Router)

Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = 'mapChart';
  chartData = [
    { code3: 'ABW', z: 105 },
    { code3: 'AFG', z: 35530 },
  ];

  chartOptions: Highcharts.Options = {
    chart: {
      map: indiaMap,
    },
    title: {
      text: '',
    },
    subtitle: {
      text: '',
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: 'spacingBox',
      },
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    colorAxis: {
      min: 0,
    },
    series: [
      {
        type: 'map',
        name: '',
        states: {
          hover: {
            color: '#BADA55',
          },
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}',
        },
        allAreas: false,
        data: [
          ['madhya pradesh', 10],
          ['uttar pradesh', 11],
          ['karnataka', 12],
          ['nagaland', 13],
          ['bihar', 14],
          ['lakshadweep', 15],
          ['andaman and nicobar', 16],
          ['assam', 17],
          ['west bengal', 18],
          ['puducherry', 19],
          ['daman and diu', 20],
          ['gujarat', 21],
          ['rajasthan', 22],
          ['dadara and nagar havelli', 23],
          ['chhattisgarh', 24],
          ['tamil nadu', 25],
          ['chandigarh', 26],
          ['punjab', 27],
          ['haryana', 28],
          ['andhra pradesh', 29],
          ['maharashtra', 30],
          ['himachal pradesh', 31],
          ['meghalaya', 32],
          ['kerala', 33],
          ['telangana', 34],
          ['mizoram', 35],
          ['tripura', 36],
          ['manipur', 37],
          ['arunanchal pradesh', 38],
          ['jharkhand', 39],
          ['goa', 40],
          ['nct of delhi', 41],
          ['odisha', 42],
          ['jammu and kashmir', 43],
          ['sikkim', 44],
          ['uttarakhand', 45],
        ],
      },
    ],
  };

  logout(){
    localStorage.clear();
    this.router.navigateByUrl("login")
  }
}
