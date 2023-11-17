import { Routes } from '@angular/router';
import { PackingListTableComponent } from './components/packing-list-table/packing-list-table.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'packinglist',
    pathMatch: 'full',
  },
  {
    path: 'packinglist',
    component: PackingListTableComponent,
  },
  {
    path: 'packinglist/:id',
    component: PackingListTableComponent,
  },
];
