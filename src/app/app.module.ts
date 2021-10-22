import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPortalComponent } from './main-portal/main-portal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as shajs from 'sha.js';


@NgModule({
  declarations: [	
    AppComponent,
      MainPortalComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
