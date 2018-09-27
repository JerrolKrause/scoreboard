import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-top-css-week',
  templateUrl: './top-css.component.html',
  styleUrls: ['./top-css.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopCssComponentWeek implements OnInit {

  public cssData:  CanvasJS.ChartDataSeriesOptions[][] = [];

  constructor() { }

  ngOnInit() {
    this.cssData = [
      this.chartCreateTalk(34),
      this.chartCreateTalk(32),
      this.chartCreateTalk(28),
      this.chartCreateTalk(27),
      this.chartCreateTalk(15),
    ];
  
  }


  private chartCreateTalk(seed?:number) {
    const monthly = Math.floor(Math.random() * 100);
    const weekly = Math.floor(Math.random() * 100);

    return [
      {
        talk: seed * 10,
        transfer: seed,
        deltaMonth: Math.floor((200 + monthly) / 150 * 100 - 100),
        deltaWeek: Math.floor((50 + weekly) / 30 * 100 - 100),
        dataPoints: [
          { y: 200 + monthly, label: "Monthly" },
          { y: 50 + weekly, label: "Weekly" },
        ]
      },
      {
        dataPoints: [
          { y: 150, label: "Monthly" },
          { y: 30, label: "Weekly" },
        ]
      },

    ];

  }

}
