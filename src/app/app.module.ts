import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { RolModule } from './models/rol/rol.module';
import { MatDialogConfig, MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RolModule,
    MatDialogModule

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
