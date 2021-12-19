import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './state/app.state';
import { hideSidenav, showSidenav } from './state/sidenav.actions';
import { selectSidenav, selectSidenavHidden } from './state/sidenav.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'simple-store';
  sidenavHidden$ = this.store.select(selectSidenavHidden);
  sidenavHidden=false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.sidenavHidden$.subscribe(hidden =>
      console.log(hidden)
    );
    this.store.subscribe(state => {
      this.sidenavHidden = state.sidenav.hidden;
      console.log(state);
    });
  }

  hideSidenav() {
    this.store.dispatch(hideSidenav());
  }
  
  showSidenav() {
    this.store.dispatch(showSidenav());
  }

}
