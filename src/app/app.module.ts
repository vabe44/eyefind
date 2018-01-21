import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EyefindHeaderComponent } from './eyefind/eyefind-header/eyefind-header.component';
import { EyefindMenuComponent } from './eyefind/eyefind-menu/eyefind-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EyefindHeaderComponent,
    EyefindMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
