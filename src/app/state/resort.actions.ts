import { createAction, props } from '@ngrx/store';
import { Resort } from './resort.model';

export const loadResorts = createAction(
    '[resorts] Load',
);

export const loadResortsFail = createAction(
    '[resorts] Load Fail',
    props<{ error: Error }>()
);

export const loadResortsSuccess = createAction(
    '[resorts] Load Success',
    props<{ resorts: Resort[] }>()
);  