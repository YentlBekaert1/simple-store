import { Component, OnInit, TrackByFunction, Output, EventEmitter} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './state/app.state';
import { hideSidenav, showSidenav } from './state/sidenav.actions';
import { DeleteResort, loadResorts, loadResortsSuccess } from './state/resort.actions';
import { initialSidenavState } from './state/sidenav.reducer';
import { initialResortState } from './state/resort.reducer';
import { selectSidenav, selectSidenavHidden } from './state/sidenav.selector';
import {Resort} from './state/resort.model'
import { ResortService } from './resort.service';
import { selectResortResorts } from './state/resort.selector';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'simple-store';
  sidenavHidden$ = this.store.select(selectSidenavHidden);
  sidenavHidden=initialSidenavState.hidden;
  resorts$=this.store.select(selectResortResorts);
  resorts=initialResortState.resorts;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.sidenavHidden$.subscribe(hidden =>
      console.log(hidden)
    );
    this.store.subscribe(state => {
      this.sidenavHidden = state.sidenav.hidden;
      this.resorts = state.resort.resorts;
      console.log(state);
    });
    this.store.dispatch(loadResorts());
  }

  hideSidenav() {
    this.store.dispatch(hideSidenav());
  }

  showSidenav() {
    this.store.dispatch(showSidenav());
  }

  identifyResort: TrackByFunction<Resort> = (_, resort) => (resort.id);

  deleteItem(resortId:string){
      console.log(resortId);
      if(confirm('Are you sure')){
        this.store.dispatch(DeleteResort({ resortId }));
      }
  }
  UpdateItem(resortId:string){
    //this.store.dispatch(showSidenav());
  }
}
