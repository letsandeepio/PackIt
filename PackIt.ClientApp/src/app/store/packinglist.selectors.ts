import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PackingListState } from './packinglist.reducer';

const PackingFeatureKey = 'packinglist';

export const getPackingListState =
  createFeatureSelector<PackingListState>(PackingFeatureKey);

export const getPackingLists = createSelector(
  getPackingListState,
  (state) => state.packinglists
);

export const getPackingListsLoading = createSelector(
  getPackingListState,
  (state) => state.loading
);

export const getPackingListsError = createSelector(
  getPackingListState,
  (state) => state.error
);
