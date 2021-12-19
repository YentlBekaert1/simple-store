import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ResortService } from '../resort.service';
import { loadResortsSuccess, loadResortsFail, loadResorts} from './resort.actions';

@Injectable({
    providedIn: 'root'
  })
export class ResortEffects {

    constructor(private actions$: Actions, private resortService: ResortService)
    {}

    loadResorts$ = createEffect(() => this.actions$.pipe(
        ofType(loadResorts),
        mergeMap(() => this.resortService.loadAll()
        .pipe(
            map(resorts => loadResortsSuccess({resorts})),
            catchError((error) => of(loadResortsFail({error}))
        )))));

}