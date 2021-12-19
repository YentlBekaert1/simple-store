import { createReducer, on } from '@ngrx/store';
import { loadResorts, loadResortsFail, loadResortsSuccess } from './resort.actions';
import {Resort} from './resort.model'
import { ResortState } from './resort.state';

export const initialResortState: ResortState = {
    error: null,
    loading: false,
    resorts: []
  };

export const resortReducer = createReducer(
  initialResortState,
  on(loadResorts, (state) => ({...state, loading:true})),
  on(loadResortsFail, (state, { error }) => ({...state, error:error})),
  on(loadResortsSuccess, (state, {resorts}) => ({...state, error:null, loading:false, resorts:resorts})),
);