import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

// import { ApiService } from '$api';
// import { UIStoreService } from '$ui';
// import { Models } from '$models';
// import { DesktopUtils } from '$utils';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {

  public slideCurrent = 'slide-1';

  public progressShow = true;

  /** Hold subs for unsub */
  private subs: Subscription[] = [];

  constructor(
    private ref: ChangeDetectorRef
    //private api: ApiService, public ui: UIStoreService, private fb: FormBuilder, private ref: ChangeDetectorRef
  ) { }

  public ngOnInit() {
   
  }

  public slide(slideEvent:any) {
    this.slideCurrent = slideEvent.current;
    this.progressShow = false;
    window.setTimeout(() => {
      this.progressShow = true;
      this.ref.markForCheck();
    });
  }

  ngOnDestroy() {
    if (this.subs.length) {
      this.subs.forEach(sub => sub.unsubscribe());
    } // Unsub
  }
}
