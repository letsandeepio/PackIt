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

  constructor(private store: Store<TabState>) {
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
}
