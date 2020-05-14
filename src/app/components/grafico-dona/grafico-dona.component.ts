import { Component, OnInit, Input } from '@angular/core';

import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  
  @Input('etiquetas') doughnutChartLabels: Label[] =  ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input('datos') doughnutChartData: number[] =   [    350,               450,               100];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
