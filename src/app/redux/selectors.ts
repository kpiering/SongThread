import { AppState } from "app/redux/redux.module";
import { EtsyListing } from "app/etsy/listing";
import { LoadStatus, EtsyState } from "app/redux/reducers/etsy.reducer";
import { Store } from "@ngrx/store";
import 'rxjs/add/operator/take';
import { EtsySection } from "app/etsy/section";
import { EtsyShop } from "app/etsy/shop";

export const etsy = {
    listings: (state: AppState): EtsyListing[] => { return state.etsy.ids.map((id) => { return state.etsy[id]; }); },
    listingsHash: (state:AppState): EtsyState => { return state.etsy; },
    loadStatus: (state:AppState) : LoadStatus => { return state.etsy.loaded;},
    sections: (state:AppState) : EtsySection[]  => {  return state.sections.ids.map((id) => { return state.sections[id]; }); },
    shop: (state:AppState) : EtsyShop => { return state.etsy.shop; },
};


export class SyncStore {
  static getState(store: Store<AppState>): AppState {
    let state: AppState;
    store.take(1).subscribe((s: AppState) => state = s);
    return state;
  }
}
