import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { EtsyService } from "app/etsy/etsy.service";
import { EtsyListing } from "app/etsy/listing";
import { EtsyShop } from "app/etsy/shop";
import { Store } from "@ngrx/store";
import { AppState } from "app/redux/redux.module";
import { etsy } from "app/redux/selectors";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  listings: Observable<EtsyListing[]>;
  shop: Observable<EtsyShop>;
  constructor(
    private etsyService: EtsyService, 
    private store: Store<AppState>) { }

   ngOnInit() {
    //this.listings = this.etsy.listings;
    //this.etsy.getListings();

    this.shop = this.store.select<EtsyShop>(etsy.shop);
    this.etsyService.getShop();
  }

}
