import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Resort } from './state/resort.model';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ResortService {

  loadAll(): Observable<Array<Resort>> {
    return from(
      fetch(`${BASE_URL}/resorts`).then(response =>
        response.json()
      )
    );
  }

  constructor() { }
}
