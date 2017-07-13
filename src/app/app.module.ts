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
import { ContentService } from "app/content/content.service";
import { ImageTextContainerComponent } from './content/image-text-container/image-text-container.component';
import { TextContainerComponent } from './content/text-container/text-container.component';
import { PageContentComponent } from './content/page-content/page-content.component';
import { TextLinkContainerComponent } from './content/text-link-container/text-link-container.component';
import { ImageTextLinkContainerComponent } from './content/image-text-link-container/image-text-link-container.component';
import { ImageContainerComponent } from './content/image-container/image-container.component';
import { HeaderContainerComponent } from './content/header-container/header-container.component';
import { SubheaderContainerComponent } from './content/subheader-container/subheader-container.component';
import { FreebiesComponent } from './freebies/freebies.component';
import { CommissionsComponent } from './commissions/commissions.component';
import { LinksComponent } from './links/links.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component:AboutComponent },
  { path: 'freebies', component:FreebiesComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'commissions', component:CommissionsComponent },
  { path: 'links', component:LinksComponent },
  
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
    ImageTextContainerComponent,
    TextContainerComponent,
    PageContentComponent,
    TextLinkContainerComponent,
    ImageTextLinkContainerComponent,
    ImageContainerComponent,
    HeaderContainerComponent,
    SubheaderContainerComponent,
    FreebiesComponent,
    CommissionsComponent,
    LinksComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReduxModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
  ],
  providers: [
    EtsyService,
    ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
