import { createReducer, on } from '@ngrx/store';
import {
  deletePackingListSuccess,
  loadPackingLists,
  loadPackingListsFailure,
  loadPackingListsSuccess,
} from './packinglist.actions';
import { PackingList } from '../../models/packinglist.model';

export interface PackingListState {
  packinglists: PackingList[];
  loading: boolean;
  error: Error | null;
}

export const initialState: PackingListState = {
  packinglists: [],
  loading: false,
  error: null,
};

export const packingListReducer = createReducer(
  initialState,
  on(loadPackingLists, (state) => ({
    ...state,
    loading: true,
  })),
  on(loadPackingListsSuccess, (state, { data }) => ({
    ...state,
    loading: false,
    packinglists: data,
  })),
  on(loadPackingListsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),
  on(deletePackingListSuccess, (state, { id }) => ({
    ...state,
    packinglists: state.packinglists.filter((b) => b.id !== id),
  }))
);
