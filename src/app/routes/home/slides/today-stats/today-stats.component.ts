import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-today-stats',
  templateUrl: './today-stats.component.html',
  styleUrls: ['./today-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodayStatsComponent implements OnInit {

  public chartData: CanvasJS.ChartDataSeriesOptions[] = [];

  constructor() { }

  ngOnInit() {

    this.chartData = [{
      showInLegend: true,
      name: 'Transfers',
      indexLabelFontSize: 28,
      
      dataPoints: [
        { label: '6 AM', y: 4 },
        { label: '7 AM', y: 6 },
        { label: '8 AM', y: 8 },
        { label: '9 AM', y: 16 },
        { label: '10 AM', y: 15 },
        { label: '11 AM', y: 35 },
        { label: '12 PM', y: 22 }
      ]
    },
    {
      showInLegend: true,
      name: "Contacts",
      indexLabelFontSize: 28,
      dataPoints: [
        { label: '6 AM', y: 68 },
        { label: '7 AM', y: 75 },
        { label: '8 AM', y: 96 },
        { label: '9 AM', y: 110 },
        { label: '10 AM', y: 112 },
        { label: '11 AM', y: 120 },
        { label: '12 PM', y: 115 }
      ]
    }]
  }

}
