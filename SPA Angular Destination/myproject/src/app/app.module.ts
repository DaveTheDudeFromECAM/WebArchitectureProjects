import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; //importation du HttpClient

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinationListComponent } from './destination-list/destination-list.component';
import { DestinationComponent } from './destination/destination.component';
import { DestinationEditComponent } from './destination-edit/destination-edit.component';
import { DestinationAddComponent } from './destination-add/destination-add.component';

@NgModule({
  declarations: [
    AppComponent,
    //MyComponentComponent,
    DestinationListComponent,
    DestinationComponent,
    DestinationEditComponent,
    DestinationAddComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
       component: DestinationEditComponent
      },
    ])
    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
