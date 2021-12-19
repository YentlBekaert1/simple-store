import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule} from '@angular/material/button'
import { MatCheckboxModule} from '@angular/material/checkbox'
import { MatSidenavModule} from '@angular/material/sidenav'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { sidenavReducer } from './state/sidenav.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSidenavModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({sidenav: sidenavReducer}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
