import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteModule } from '$site'; // Site modules
import { DatagridModule, ChartModule } from '$libs'; // Lazy loaded datagrid

// Home component and routing
import { routing } from './home.routes';
import { HomeComponent } from './home.component';
import { TopCssComponent } from './slides/top-css/top-css.component';
import { TopCssComponentWeek } from './slides/top-css-week/top-css.component';
import { TickerComponent } from './ticker/ticker.component';
import { TodayStatsComponent } from './slides/today-stats/today-stats.component';
import { GoalsComponent } from './slides/goals/goals.component';
import { TopTransfersComponent } from './slides/top-transfers/top-transfers.component';
import { Top30Component } from './slides/top30/top30.component';

@NgModule({
  imports: [CommonModule, SiteModule, routing, DatagridModule, ChartModule],
  declarations: [HomeComponent, TopCssComponent, TickerComponent, TodayStatsComponent, GoalsComponent, TopTransfersComponent, TopCssComponentWeek, Top30Component],
  providers: [],
  exports: [],
  entryComponents: [],
})
export class HomeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HomeModule,
      providers: [],
    };
  }
}
