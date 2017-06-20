import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { EtsyService } from "app/etsy/etsy.service";
import { EtsyListing } from "app/etsy/listing";
import { EtsyShop } from "app/etsy/shop";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  listings: Observable<EtsyListing[]>;
  shop: Observable<EtsyShop>;
  constructor(private etsy: EtsyService, ) { }

   ngOnInit() {
    //this.listings = this.etsy.listings;
    //this.etsy.getListings();

    this.shop = this.etsy.shop;
    this.etsy.getShop();
  }

}
