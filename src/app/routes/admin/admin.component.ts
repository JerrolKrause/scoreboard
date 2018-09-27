import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UIStoreService } from '$ui';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent implements OnInit {
  public slides: any;

  constructor(private ui: UIStoreService) {
  }

  ngOnInit() {
    this.ui.select.carousel$.subscribe(slides => this.slides = slides).unsubscribe();


  }

  public slideChange() {
    this.ui.carouselChange(this.slides);
  }

}
