import { Component, OnInit, ViewChild } from '@angular/core';
import { single } from '../../assets/data/data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  single: any[];
  multi: any[];

  view: any[] = [950, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  
  constructor() { 
    Object.assign(this, { single })
  }
  ngOnInit(): void {
    
  }
  
  onSelect(event) {
    console.log(event);
  }

}
