import { createReducer, on } from '@ngrx/store';

import { showSidenav, hideSidenav } from './sidenav.actions';
import { SidenavState } from './sidenav.state';

export const initialSidenavState : SidenavState = {
    hidden: true
  };

export const sidenavReducer = createReducer(
  initialSidenavState,
  on(showSidenav, (state) => ({...state, hidden:false})),
  on(hideSidenav, (state) => ({...state, hidden:true})),
);