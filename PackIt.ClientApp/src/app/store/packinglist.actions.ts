import { createAction, props } from '@ngrx/store';
import { PackingList } from '../models/packinglist.model';

export const loadPackingLists = createAction('[PackingList] Load PackingLists');
export const loadPackingListsSuccess = createAction(
  '[PackingList] Load PackingLists Success',
  props<{ data: PackingList[] }>()
);
export const loadPackingListsFailure = createAction(
  '[PackingList] Load PackingLists Failure',
  props<{ error: any }>()
);
