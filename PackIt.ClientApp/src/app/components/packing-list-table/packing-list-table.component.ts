import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PackingList } from '../../models/packinglist.model';
import { Store } from '@ngrx/store';
import {
  getPackingListState,
  getPackingLists,
  getPackingListsError,
  getPackingListsLoading,
} from '../../store/packinglist.selectors';
import { loadPackingLists } from '../../store/packinglist.actions';

@Component({
  selector: 'app-packing-list-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packing-list-table.component.html',
  styleUrl: './packing-list-table.component.scss',
})
export class PackingListTableComponent {
  packingLists$!: Observable<PackingList[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<Error | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.packingLists$ = this.store.select(getPackingLists);
    this.loading$ = this.store.select(getPackingListsLoading);
    this.error$ = this.store.select(getPackingListsError);
    this.store.dispatch(loadPackingLists());
  }
}
