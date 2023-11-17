import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppTitleBarComponent } from './components/app-title-bar/app-title-bar.component';
import { PackingListTableComponent } from './components/packing-list-table/packing-list-table.component';
import { MatTabsModule } from '@angular/material/tabs';
import { Observable } from 'rxjs';
import { Tab } from './models/tab.model';
import { Store } from '@ngrx/store';
import { TabState } from './store/tab/tab.reducer';
import { selectAllTabs } from './store/tab/tab.selectors';
import { addTab } from './store/tab/tab.actions';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { AddPackingListDialogComponent } from './components/add-packing-list-dialog/add-packing-list-dialog.component';
import { PackingList } from './models/packinglist.model';
import { addPackingList } from './store/packinglist/packinglist.actions';
import { v4 as uuidv4 } from 'uuid';
import { AddPackingListRequest } from './services/packinglist.service';

export interface AddPackingListDialogData {
  name: string;
  gender: 'male' | 'female';
  city: string;
  days: number;
  country: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    AppTitleBarComponent,
    PackingListTableComponent,
    RouterModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  tabs$: Observable<Tab[]>;

  constructor(private store: Store<TabState>, public dialog: MatDialog) {
    this.tabs$ = this.store.select(selectAllTabs);
  }

  ngOnInit(): void {}

  addTab() {
    this.store.dispatch(
      addTab({
        tab: { id: 'test', link: 'packinglist/test', title: 'Test Tab' },
      })
    );
  }

  addPackingList() {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPackingListDialogComponent, {
      data: { name: '', description: '' },
    });

    dialogRef.afterClosed().subscribe((result: AddPackingListDialogData) => {
      const request = this.mapPackingListToRequest(result);

      this.store.dispatch(
        addPackingList({
          packingList: request,
        })
      );
    });
  }

  private mapPackingListToRequest(
    packingList: AddPackingListDialogData
  ): AddPackingListRequest {
    return {
      id: uuidv4(),
      name: packingList.name,
      gender: packingList.gender === 'male' ? 0 : 1,
      days: Number(packingList.days),
      localization: {
        city: packingList.city,
        country: packingList.country,
      },
    };
  }
}
