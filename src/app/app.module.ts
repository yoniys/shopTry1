import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Item1Component } from './comps/items/item1/item1.component';

import{HttpClientModule} from '@angular/common/http'

import{DemoMaterialModule} from './m/module-matrial/module-matrial.module'
import { from } from 'rxjs';
import { WarperComponent } from './comps/warper/warper.component';

@NgModule({
  declarations: [
    AppComponent,
    Item1Component,
    WarperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
