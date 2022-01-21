import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card';

import { MatButtonModule} from '@angular/material/button'
import { MatCheckboxModule} from '@angular/material/checkbox'
import { MatSidenavModule} from '@angular/material/sidenav'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { sidenavReducer } from './state/sidenav.reducer';
import { resortReducer } from './state/resort.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ResortEffects } from './state/resort.effect';
import { ResortService } from './resort.service';
import { EditResortComponentComponent } from './edit-resort-component/edit-resort-component.component';



@NgModule({
  declarations: [
    AppComponent,
    EditResortComponentComponent
  ],
  imports: [
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    BrowserModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSidenavModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({sidenav: sidenavReducer,resort: resortReducer}),
    EffectsModule.forRoot([ResortEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
