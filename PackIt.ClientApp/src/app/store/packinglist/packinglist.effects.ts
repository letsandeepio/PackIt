import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { PackingListService } from '../../services/packinglist.service';
import {
  addPackingList,
  addPackingListFailure,
  addPackingListSuccess,
  deletePackingList,
  deletePackingListFailure,
  deletePackingListSuccess,
  loadPackingLists,
  loadPackingListsFailure,
  loadPackingListsSuccess,
} from './packinglist.actions';

@Injectable()
export class PackingListEffects {
  loadPackingLists$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPackingLists),
      mergeMap(() =>
        this.packingListService.getPackingLists().pipe(
          map((data) => loadPackingListsSuccess({ data })),
          catchError((error) => of(loadPackingListsFailure({ error })))
        )
      )
    )
  );

  deletePackingList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deletePackingList),
      mergeMap((action) =>
        this.packingListService.deletePackingList(action.id).pipe(
          map(() => deletePackingListSuccess({ id: action.id })),
          catchError((error) => of(deletePackingListFailure({ error })))
        )
      )
    )
  );

  addPackingList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addPackingList),
      mergeMap((action) =>
        this.packingListService.addPackingList(action.packingList).pipe(
          map((data) => addPackingListSuccess({ packingList: data })),
          catchError((error) => of(addPackingListFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private packingListService: PackingListService
  ) {}
}
