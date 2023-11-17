import { createReducer, on } from '@ngrx/store';
import {
  loadPackingLists,
  loadPackingListsFailure,
  loadPackingListsSuccess,
} from './packinglist.actions';

export interface PackingListState {
  packinglists: Event[];
  loading: boolean;
  error: string;
}

export const initialState: PackingListState = {
  packinglists: [],
  loading: false,
  error: '',
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
  }))
);
