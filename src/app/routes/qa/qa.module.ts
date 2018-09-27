import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteModule } from '$site'; // Site modules
import { QaComponent } from './qa.component';
import { routing } from './qa.routes';

import { ChartsComponent } from './routes/charts/charts.component';
import { ChartModule } from '$libs';

@NgModule({
  imports: [CommonModule, SiteModule, routing, ChartModule],
  declarations: [QaComponent, ChartsComponent],
})
export class QaModule {}
