import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EtsyService } from "app/etsy/etsy.service";
import { EtsyListingComponent } from './etsy/etsy-listing/etsy-listing.component';
import { HomeComponent } from "app/home/home.component";
import { ShopComponent } from "app/shop/shop.component";
import { EtsyShopComponent } from './etsy/etsy-shop/etsy-shop.component';
import { AboutComponent } from './about/about/about.component';
import { ReduxModule } from './redux/redux.module';
import { EtsySectionComponent } from './etsy/etsy-section/etsy-section/etsy-section.component'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'about', component:AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EtsyListingComponent,
    HomeComponent,
    ShopComponent,
    EtsyShopComponent,
    AboutComponent,
    EtsySectionComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReduxModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    EtsyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
