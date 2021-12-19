import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { SidenavState } from "./sidenav.state";

export const selectSidenav = createFeatureSelector<AppState,SidenavState>('sidenav')

export const selectSidenavHidden = createSelector(
  selectSidenav,
  (state: SidenavState) => state.hidden
);