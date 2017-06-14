import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EtsyService } from "app/etsy/etsy.service";
import { EtsyListingComponent } from './etsy/etsy-listing/etsy-listing.component';
import { HomeComponent } from "app/home/home.component";
import { ShopComponent } from "app/shop/shop.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EtsyListingComponent,
    HomeComponent,
    ShopComponent,
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    EtsyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
