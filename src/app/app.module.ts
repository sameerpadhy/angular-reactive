import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customers/customer-template-driven.component';
import {CustomerReactiveComponent} from './customers/customer-reactive-driven.component'

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
