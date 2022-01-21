import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditResortComponentComponent } from './edit-resort-component/edit-resort-component.component';

const routes: Routes = [
  {
    path: 'update/:id',
    component: EditResortComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
