import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    data: { title: 'Admin' },
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
