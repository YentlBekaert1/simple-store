import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { ResortState } from "./resort.state";

export const selectResort = createFeatureSelector<ResortState>('resort')

export const selectResortResorts = createSelector(
    selectResort,
    (state: ResortState) => state.resorts
);

export const selectResortError = createSelector(
    selectResort,
    (state: ResortState) => state.error
);

export const selectResortLoading = createSelector(
    selectResort,
    (state: ResortState) => state.loading
);