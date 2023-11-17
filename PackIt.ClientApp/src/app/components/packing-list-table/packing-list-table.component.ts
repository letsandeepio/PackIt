import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PackingList } from '../../models/packinglist.model';
import {
  deletePackingList,
  loadPackingLists,
} from '../../store/packinglist/packinglist.actions';
import {
  getPackingLists,
  getPackingListsError,
  getPackingListsLoading,
} from '../../store/packinglist/packinglist.selectors';
import { MatButtonModule } from '@angular/material/button';
import { addTab } from '../../store/tab/tab.actions';

@Component({
  selector: 'app-packing-list-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  templateUrl: './packing-list-table.component.html',
  styleUrl: './packing-list-table.component.scss',
})
export class PackingListTableComponent {
  loading$!: Observable<boolean>;
  error$!: Observable<Error | null>;

  packingListsDataSource!: PackingList[];

  displayedColumns: string[] = ['id', 'name', 'edit', 'delete'];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(getPackingLists).subscribe((packingLists) => {
      this.packingListsDataSource = packingLists;
    });

    this.loading$ = this.store.select(getPackingListsLoading);
    this.error$ = this.store.select(getPackingListsError);
    this.store.dispatch(loadPackingLists());
  }

  editPackingList(packinglist: PackingList): void {
    this.store.dispatch(
      addTab({
        tab: {
          id: packinglist.id,
          link: 'packinglist/' + packinglist.id,
          title: packinglist.name,
        },
      })
    );
  }

  deletePackingList(packinglist: PackingList): void {
    console.log('delete packinglist: ' + packinglist.id);
    this.store.dispatch(deletePackingList({ id: packinglist.id }));
  }
}
