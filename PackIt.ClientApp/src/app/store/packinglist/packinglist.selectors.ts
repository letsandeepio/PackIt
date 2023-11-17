import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PackingListState } from './packinglist.reducer';

export const PackingFeatureKey = 'packingList';

export const getPackingListState =
  createFeatureSelector<PackingListState>(PackingFeatureKey);

export const getPackingLists = createSelector(getPackingListState, (state) => {
  return state.packinglists;
});

export const getPackingListsLoading = createSelector(
  getPackingListState,
  (state) => state.loading
);

export const getPackingListsError = createSelector(
  getPackingListState,
  (state) => state.error
);
