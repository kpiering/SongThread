import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from "@angular/http";

import { environment } from '../../environments/environment';
import { Observable } from "rxjs/Observable";
import { EtsyListing } from "app/etsy/listing";
import { Subject } from "rxjs/Subject";
import { EtsyShop } from "app/etsy/shop";
import { Store } from "@ngrx/store";
import { AppState } from "app/redux/redux.module";
import { EtsyActions } from "app/redux/actions/etsy.actions";
import { SyncStore } from "app/redux/selectors";

@Injectable()
export class EtsyService {
  getListingsUrl = 'https://openapi.etsy.com/v2/shops/'+ environment.shopId+'/listings/active.js';
  listings: Observable<EtsyListing[]>;
  private listingSubject: Subject<EtsyListing[]>;

  getShopUrl = 'http://cutekick.com/cache/etsy.json';
  shop: Observable<EtsyShop>;
  private shopSubject: Subject<EtsyShop>;
  
  constructor( 
    private http: Http, 
    private store: Store<AppState>
    ) {
    this.listingSubject = new Subject<EtsyListing[]>();
    this.listings = this.listingSubject.asObservable();
    
    this.shopSubject = new Subject<EtsyShop>();
    this.shop = this.shopSubject.asObservable();
  }

  getListings() {
    console.log('get listings');

    const params: URLSearchParams = new URLSearchParams();
    params.set('limit', '100');
    params.set('api_key', environment.apiKey);
    params.set('includes', 'Images');
    params.set('callback', 'JSONP_CALLBACK');
    const requestOptions: RequestOptions = new RequestOptions({
      search: params,
    });
    this.http.get(this.getListingsUrl, requestOptions).subscribe((res) => {
      const data: any = res.json();
      this.listingSubject.next(data.results);
      console.log(res.json());
    });
  }

  getShop() {
    const state: AppState = SyncStore.getState(this.store);

    if (state.etsy.loaded === 'empty') {
      console.log('get shop');
      const params: URLSearchParams = new URLSearchParams();
      /*params.set('includes', 'Listings:active:100/Images');
      params.set('api_key', environment.apiKey);
      params.set('callback', 'JSONP_CALLBACK');*/
      this.store.dispatch(EtsyActions.loadBegin());
      const requestOptions: RequestOptions = new RequestOptions({
        search: params,
      });
      this.http.get(this.getShopUrl, requestOptions).subscribe((res) => {
        const data: any = res.json();
        this.shopSubject.next(data.results[0]);
        console.log(res.json());
        this.store.dispatch(EtsyActions.loadComplete(data.results[0]));
      });
    }
  }

}
