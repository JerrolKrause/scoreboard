import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { Datagrid } from '../../models/typings';

@Component({
  selector: 'datagrid-info',
  templateUrl: './info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent implements OnInit {
  @Input()
  state: Datagrid.State;
  @Input()
  options: Datagrid.Options;
  @Input()
  columnsMapped: Datagrid.Column;
  @Output()
  onReset: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  /**
   * Reset one of the datatable controls
   * @param resetType
   */
  public reset(resetType: 'groups' | 'sorts' | 'filters'): void {
    this.onReset.emit(resetType);
  }
}
