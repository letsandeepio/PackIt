import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PackingListState } from './packinglist.reducer';

const PackingFeatureKey = 'packinglist';

export const selectPackingListState =
  createFeatureSelector<PackingListState>(PackingFeatureKey);

export const selectPackingLists = createSelector(
  selectPackingListState,
  (state) => state.packinglists
);

export const selectPackingListLoading = createSelector(
  selectPackingListState,
  (state) => state.loading
);

export const selectPackingListError = createSelector(
  selectPackingListState,
  (state) => state.error
);
