import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Datagrid } from '../../../models/typings';

@Component({
  selector: '<filters>',
  templateUrl: './filters.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Input()
  column: Datagrid.Column;
  @Input()
  options: Datagrid.Options;
  @Input()
  state: Datagrid.State;
  @Input()
  status: Datagrid.Status;
  @Input()
  filterTerms: any = {};
  @Output()
  onFiltersUpdated: EventEmitter<any> = new EventEmitter();
  public defaultList: any;

  public model: any;
  public modelLabel: string;
  public modelValue: string;
  public modelClasses: string;
  public modelStyles: string;

  private filterTerm: BehaviorSubject<any> = new BehaviorSubject(null);
  private subs: Subscription[] = [];

  constructor() {}

  ngOnInit() {
    // Create an subscription to debounce the user input
    this.filterTerm.pipe(debounceTime(300)).subscribe(filter => {
      if (filter) {
        this.onFiltersUpdated.emit(filter);
      }
    });

    // If custom column data has been supplied
    if (this.options.columnData) {
      const sub = this.options.columnData[this.column.prop].model.subscribe(model => {
        if (this.options.columnData) {
          // If a modelSrc has been supplied, fetch data from that. If not get it straight from the model
          this.model = this.options.columnData[this.column.prop].modelSrc
            ? model[this.options.columnData[this.column.prop].modelSrc]
            : model;

          // Simplify some of the properties for easier use in the dom
          this.modelLabel = this.options.columnData[this.column.prop].label || '';
          this.modelValue = this.options.columnData[this.column.prop].value || '';
          this.modelClasses = this.options.columnData[this.column.prop].classes || '';
          this.modelStyles = this.options.columnData[this.column.prop].styles || '';
        }
      });
      this.subs.push(sub);
    }
  }

  /**
   * When the open form filter is modified
   * @param columnProp
   * @param operator
   * @param newTerm
   * @param oldTerm
   */
  public modifyFilter(columnProp: string, operator: string, newTerm: string | boolean, oldTerm: string) {
    // console.warn('modifyFilter',newTerm, oldTerm);
    const filterObj = {
      filterAction: '',
      filter: { prop: columnProp, operator: operator, value: newTerm },
    };

    // Adding new filter
    if ((oldTerm === '' || !oldTerm) && newTerm !== '') {
      filterObj.filterAction = 'add';
    } else if (newTerm === '' || newTerm === false || !newTerm || newTerm === oldTerm) {
      // Removing existing filter
      filterObj.filterAction = 'remove';
    } else if (newTerm !== oldTerm) {
      // Changing existing filter
      filterObj.filterAction = 'change';
    }

    // console.warn('modifyFilter 2', JSON.parse(JSON.stringify(filterObj)));
    this.filterTerm.next(filterObj);
  }

  ngOnDestroy() {
    if (this.subs.length) {
      this.subs.forEach(sub => sub.unsubscribe());
    }
  }
}
