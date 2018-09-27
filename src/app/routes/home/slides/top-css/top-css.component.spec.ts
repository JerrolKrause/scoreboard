import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCssComponent } from './top-css.component';

describe('TopCssComponent', () => {
  let component: TopCssComponent;
  let fixture: ComponentFixture<TopCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
