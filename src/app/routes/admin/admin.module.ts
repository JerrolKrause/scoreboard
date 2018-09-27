import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DndModule } from 'ng2-dnd';
import { AdminComponent } from './admin.component';

import { SiteModule } from '$site'; // Site modules

// Home component and routing
import { routing } from './admin.routes';

@NgModule({
  imports: [
    CommonModule,
    DndModule.forRoot(),
    SiteModule.forRoot(),
    routing
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
