import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationAddComponent } from './destination-add/destination-add.component';
import { DestinationEditComponent } from './destination-edit/destination-edit.component';
import { DestinationComponent } from './destination/destination.component';

const routes: Routes = [
  {
    path: 'destinations',
    component: DestinationComponent
  },
  {
    path: 'destination-add',
    component: DestinationAddComponent
  },
  {
    path: 'destination-edit/:destination_id',
    component: DestinationEditComponent
  },
  {
    path: '',
    redirectTo: 'destinations',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
