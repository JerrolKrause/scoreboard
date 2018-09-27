import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-top30',
  templateUrl: './top30.component.html',
  styleUrls: ['./top30.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Top30Component implements OnInit {

  public agents = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1];

  constructor() { }

  ngOnInit() {
  }

}
