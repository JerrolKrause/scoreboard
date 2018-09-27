import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalsComponent implements OnInit {

  public chartData: CanvasJS.ChartDataSeriesOptions[] = [];
  public chartData2: CanvasJS.ChartDataSeriesOptions[] = [];

  constructor() { }

  ngOnInit() {

    this.chartData = [{
      showInLegend: true,
      name: 'Achieved',
      indexLabelFontSize: 28,
      dataPoints: [
        { label: 'Daily', y: 650 },
        { label: 'Weekly', y: 1500 },
        { label: 'Monthly', y: 25600 },
      ]
    },
    {
      showInLegend: true,
      name: "Remaining",
      indexLabelFontSize: 28,
      dataPoints: [
        { label: 'Daily', y: 350 },
        { label: 'Weekly', y: 5500 },
        { label: 'Monthly', y: 54000 },
      ]
      }];


    this.chartData2 = [{
      showInLegend: true,
      name: 'Achieved',
      indexLabelFontSize: 28,
      dataPoints: [
        { label: 'Daily', y: 2 },
        { label: 'Weekly', y: 64 },
        { label: 'Monthly', y: 260 },
      ]
    },
    {
      showInLegend: true,
      name: "Remaining",
      indexLabelFontSize: 28,
      dataPoints: [
        { label: 'Daily', y: 8 },
        { label: 'Weekly', y: 68 },
        { label: 'Monthly', y: 320 },
      ]
    }];


  }

}
