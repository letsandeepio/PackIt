import { createAction, props } from '@ngrx/store';
import { PackingList } from '../../models/packinglist.model';
import { AddPackingListRequest } from '../../services/packinglist.service';

export const loadPackingLists = createAction('[PackingList] Load PackingLists');

export const loadPackingListsSuccess = createAction(
  '[PackingList] Load PackingLists Success',
  props<{ data: PackingList[] }>()
);

export const loadPackingListsFailure = createAction(
  '[PackingList] Load PackingLists Failure',
  props<{ error: any }>()
);

export const deletePackingList = createAction(
  '[PackingList] Delete PackingList',
  props<{ id: string }>()
);

export const deletePackingListSuccess = createAction(
  '[PackingList] Delete PackingList Success',
  props<{ id: string }>()
);

export const deletePackingListFailure = createAction(
  '[PackingList] Delete PackingList Failure',
  props<{ error: any }>()
);

export const addPackingList = createAction(
  '[PackingList] Add PackingList',
  props<{ packingList: AddPackingListRequest }>()
);

export const addPackingListSuccess = createAction(
  '[PackingList] Add PackingList Success',
  props<{ packingList: PackingList }>()
);

export const addPackingListFailure = createAction(
  '[PackingList] Add PackingList Failure',
  props<{ error: any }>()
);
