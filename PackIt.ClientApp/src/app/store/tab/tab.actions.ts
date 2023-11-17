import { createAction, props } from '@ngrx/store';
import { Tab } from '../../models/tab.model';

export enum TabActionTypes {
  AddTab = '[Tab] Add Tab',
  RemoveTab = '[Tab] Remove Tab',
}

export const addTab = createAction(
  TabActionTypes.AddTab,
  props<{ tab: Tab }>()
);

export const removeTab = createAction(
  TabActionTypes.RemoveTab,
  props<{ id: Tab['id'] }>()
);
