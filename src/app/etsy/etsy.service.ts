import { Injectable } from '@angular/core';
import { Jsonp, RequestOptions, URLSearchParams } from "@angular/http";

import { environment } from '../../environments/environment';
import { Observable } from "rxjs/Observable";
import { EtsyListing } from "app/etsy/listing";
import { Subject } from "rxjs/Subject";

@Injectable()
export class EtsyService {
  getListingsUrl = 'https://openapi.etsy.com/v2/shops/'+ environment.shopId +'/listings/active.js';
  listings: Observable<EtsyListing[]>;
  private listingSubject: Subject<EtsyListing[]>;
  constructor( private http: Jsonp) {
    this.listingSubject = new Subject<EtsyListing[]>();
    this.listings = this.listingSubject.asObservable();
  }

  getListings() {
    console.log('hi');
    const params: URLSearchParams = new URLSearchParams();
    params.set('limit', '100');
    params.set('api_key', environment.apiKey);
    params.set('includes', 'Images');
    params.set('callback', 'JSONP_CALLBACK');
    const requestOptions: RequestOptions = new RequestOptions({
      search: params,
    });
    this.http.get(this.getListingsUrl, requestOptions)
    .subscribe((res) => {
      const data: any = res.json();
      this.listingSubject.next(data.results);
      console.log(res.json());
    });
  }

}
