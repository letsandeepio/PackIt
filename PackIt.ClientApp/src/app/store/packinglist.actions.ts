import { createAction, props } from '@ngrx/store';

export const loadPackingLists = createAction('[PackingList] Load PackingLists');
export const loadPackingListsSuccess = createAction(
  '[PackingList] Load PackingLists Success',
  props<{ data: Event[] }>()
);
export const loadPackingListsFailure = createAction(
  '[PackingList] Load PackingLists Failure',
  props<{ error: any }>()
);
