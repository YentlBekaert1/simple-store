import { createAction, props } from '@ngrx/store';
 
export const hideSidenav = createAction(
  '[sidenav] Hide',
);

export const showSidenav = createAction(
    '[sidenav] Show',
  ); 