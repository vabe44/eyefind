import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EyefindHeaderComponent } from './eyefind/eyefind-header/eyefind-header.component';
import { EyefindMenuComponent } from './eyefind/eyefind-menu/eyefind-menu.component';
import { EyefindHomecontentComponent } from './eyefind/eyefind-homecontent/eyefind-homecontent.component';
import { EyefindFeaturedSitesComponent } from './eyefind/eyefind-featured-sites/eyefind-featured-sites.component';
import { EyefindNewsComponent } from './eyefind/eyefind-news/eyefind-news.component';
import { EyefindWebsiteOfTheMinuteComponent } from './eyefind/eyefind-website-of-the-minute/eyefind-website-of-the-minute.component';
import { EyefindRecentBleetsComponent } from './eyefind/eyefind-recent-bleets/eyefind-recent-bleets.component';
import { EyefindSponsoredAdvertComponent } from './eyefind/eyefind-sponsored-advert/eyefind-sponsored-advert.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EyefindHeaderComponent,
    EyefindMenuComponent,
    EyefindHomecontentComponent,
    EyefindFeaturedSitesComponent,
    EyefindNewsComponent,
    EyefindWebsiteOfTheMinuteComponent,
    EyefindRecentBleetsComponent,
    EyefindSponsoredAdvertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
