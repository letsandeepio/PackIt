import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PackingList } from '../../models/packinglist.model';
import { loadPackingLists } from '../../store/packinglist.actions';
import {
  getPackingLists,
  getPackingListsError,
  getPackingListsLoading,
} from '../../store/packinglist.selectors';

@Component({
  selector: 'app-packing-list-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './packing-list-table.component.html',
  styleUrl: './packing-list-table.component.scss',
})
export class PackingListTableComponent {
  loading$!: Observable<boolean>;
  error$!: Observable<Error | null>;

  packingListsDataSource!: PackingList[];

  displayedColumns: string[] = ['id', 'name'];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(getPackingLists).subscribe((packingLists) => {
      this.packingListsDataSource = packingLists;
    });

    this.loading$ = this.store.select(getPackingListsLoading);
    this.error$ = this.store.select(getPackingListsError);
    this.store.dispatch(loadPackingLists());
  }
}
