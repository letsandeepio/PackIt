import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { PackingListService } from '../../services/event.service';
import {
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

  constructor(
    private actions$: Actions,
    private packingListService: PackingListService
  ) {}
}
