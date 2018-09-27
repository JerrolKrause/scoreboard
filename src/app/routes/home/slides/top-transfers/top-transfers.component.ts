import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { transfers } from './transfers';


@Component({
  selector: 'app-top-transfers',
  templateUrl: './top-transfers.component.html',
  styleUrls: ['./top-transfers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopTransfersComponent implements OnInit {

  public dataPointsCounts: CanvasJS.ChartDataSeriesOptions[] = [];
  public options: CanvasJS.ChartOptions;

  constructor() { }

  ngOnInit() {
    this.dataPointsCounts = this.countsPerAgent();

  }
  // Counts need to be between 0 and 10
  private countsPerAgent() {
    const data = [...transfers];
    const date = transfers[0].date;

    const transfersTotal: { [key: string]: { label: string; y: number } } = {};

    data.forEach(elem => {
      if (elem.date === date) {
        if (!transfersTotal[elem.name]) {
          transfersTotal[elem.name] = {
            label: elem.name,
            y: Math.floor(Math.random() * 15),
          };
        }
        // transfersTotal[elem.name].y += elem.Transfers;
      }
    });

    const dataPoints = [];

    for (let key in transfersTotal) {
      dataPoints.push(transfersTotal[key]);
    }

    return <CanvasJS.ChartDataSeriesOptions[]>[
      {
        indexLabelFontSize: 11,
        indexLabelFontColor: '#000',
        dataPoints: dataPoints.sort((a, b) => {
          if (a.y < b.y) return -1;
          if (a.y > b.y) return 1;
          return 0;
        }),
      },
    ];
  }

}
