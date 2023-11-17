import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PackingList } from '../../models/packinglist.model';
import { loadPackingLists } from '../../store/packinglist/packinglist.actions';
import {
  getPackingLists,
  getPackingListsError,
  getPackingListsLoading,
} from '../../store/packinglist/packinglist.selectors';
import { addTab } from '../../store/tab/tab.actions';

import { MatDialog } from '@angular/material/dialog';
import { DeletePackingListConfirmationDialogComponent } from '../delete-packing-list-confirmation-dialog/delete-packing-list-confirmation-dialog.component';

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

  constructor(private store: Store, public dialog: MatDialog) {}

  openDialog(packingListName: string): void {
    const dialogRef = this.dialog.open(
      DeletePackingListConfirmationDialogComponent,
      {
        data: { packingListName, confirm: false },
      }
    );

    dialogRef.afterClosed().subscribe((result) => {});
  }

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
    // this.store.dispatch(deletePackingList({ id: packinglist.id }));

    this.openDialog(packinglist.name);
  }
}
