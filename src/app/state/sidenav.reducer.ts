import { createReducer, on } from '@ngrx/store';

import { showSidenav, hideSidenav } from './sidenav.actions';

export const initialState = {
    hidden: true
  };

export const sidenavReducer = createReducer(
  initialState,
  on(showSidenav, (state) => ({...state, hidden:false})),
  on(hideSidenav, (state) => ({...state, hidden:true})),
);