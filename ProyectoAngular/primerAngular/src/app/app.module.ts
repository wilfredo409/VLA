import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgFor, NgForOf } from '@angular/common';
import { of } from 'rxjs';
//import { NO_ERRORS_SCHEMA } from '@angular/compiler';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
