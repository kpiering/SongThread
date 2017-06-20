import { AppState } from "app/redux/redux.module";
import { EtsyListing } from "app/etsy/listing";
import { LoadStatus } from "app/redux/reducers/etsy.reducer";
import { Store } from "@ngrx/store";
import 'rxjs/add/operator/take';

export const etsy = {
    listings: (state: AppState): EtsyListing[] => { return state.etsy.ids.map((id) => { return state.etsy[id]; }); },
    loadStatus: (state:AppState) : LoadStatus => { return state.etsy.loaded; },
};

export class SyncStore {
  static getState(store: Store<AppState>): AppState {
    let state: AppState;
    store.take(1).subscribe((s: AppState) => state = s);
    return state;
  }
}
