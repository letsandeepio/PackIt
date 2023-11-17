import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromTab from './tab.reducer';

export const TabsFeatureKey = 'tabs';

export const selectTabState =
  createFeatureSelector<fromTab.TabState>(TabsFeatureKey);

export const selectAllTabs = createSelector(
  selectTabState,
  fromTab.selectAllTabs
);
