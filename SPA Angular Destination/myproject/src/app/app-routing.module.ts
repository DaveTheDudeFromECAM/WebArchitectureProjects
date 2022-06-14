import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationComponent } from './destination/destination.component';
import { DestinationAddComponent } from './destination-add/destination-add.component';
import { DestinationEditComponent } from './destination-edit/destination-edit.component';

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
    path: 'destination-edit',
    component: DestinationEditComponent
  },
  {
    path: '',
    redirectTo: '/destinations',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
