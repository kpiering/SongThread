import { Component, OnInit, Input } from '@angular/core';
import { EtsyShop } from "app/etsy/shop";
import { Store } from "@ngrx/store";
import { AppState } from "app/redux/redux.module";
import { EtsyListing } from "app/etsy/listing";
import { etsy } from "app/redux/selectors";
import { Observable } from "rxjs/Observable";
import { LoadStatus } from "app/redux/reducers/etsy.reducer";

@Component({
  selector: 'app-etsy-shop',
  templateUrl: './etsy-shop.component.html',
  styleUrls: ['./etsy-shop.component.css']
})
export class EtsyShopComponent implements OnInit {
  @Input() shop: EtsyShop;
  listings$: Observable<EtsyListing[]>;
  loaded$: Observable<LoadStatus>;
  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.selectFromStore();
  }

  selectFromStore() {
    this.listings$ = this.store.select<EtsyListing[]>(etsy.listings);
    this.loaded$ = this.store.select<LoadStatus>(etsy.loadStatus);
  }

}
