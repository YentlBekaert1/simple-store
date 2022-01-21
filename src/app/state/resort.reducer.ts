import { createReducer, on } from '@ngrx/store';
import { DeleteResort, loadResorts, loadResortsFail, loadResortsSuccess, updateResort } from './resort.actions';
import { Resort } from './resort.model';
import { ResortState } from './resort.state';

export const initialResortState: ResortState = {
    error: null,
    loading: false,
    resorts: []
  };

export const resortReducer = createReducer(
  initialResortState,
  on(loadResorts, (state :  ResortState) => ({...state, loading:true})),
  on(loadResortsFail, (state : ResortState, { error } : {error:Error}) => ({...state, error:error})),
  on(loadResortsSuccess, (state :ResortState, { resorts }: {resorts:Resort[]}) => ({...state, error:null, loading:false, resorts:resorts})),
  on(DeleteResort, (state: ResortState, { resortId } : {resortId: string}) => {
    const updateResort = state.resorts.filter(resort => {return resort.id !== resortId})
    return{
      ...state,
      resorts:updateResort
    }
  }),
  on(updateResort, (state, action) => {
    const UpdatedResorts = state.resorts.map(resort => {
      return action.resort.id === resort.id ? action.resort : resort;
    })
    return {
      ...state, resorts: UpdatedResorts,
    }
  })
);
