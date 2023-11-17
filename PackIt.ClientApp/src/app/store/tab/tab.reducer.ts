import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Tab } from '../../models/tab.model';
import * as TabActions from './tab.actions';

export interface TabState extends EntityState<Tab> {
  // active tabe is type of tab id
  activeTab: Tab['id'] | null;
}

export const adapter: EntityAdapter<Tab> = createEntityAdapter<Tab>({});

export const initialState: TabState = adapter.getInitialState({
  activeTab: null,
});

export const tabReducer = createReducer(
  initialState,
  on(TabActions.addTab, (state, { tab }) => {
    return adapter.addOne(tab, state);
  }),
  on(TabActions.removeTab, (state, { id }) => {
    return adapter.removeOne(id, state);
  })
);

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectTabIds = selectIds;

export const selectTabEntities = selectEntities;

export const selectAllTabs = selectAll;

// select the total user count
export const selectTabTotal = selectTotal;
