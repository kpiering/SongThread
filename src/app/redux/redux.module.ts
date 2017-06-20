import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { EtsyReducer, EtsyState } from './reducers/etsy.reducer'


export interface AppState {
  etsy: EtsyState;
}

@NgModule({
 imports: [
   StoreModule.provideStore({
     etsy: EtsyReducer.reduce,
   }),
   StoreDevtoolsModule.instrumentOnlyWithExtension(),
 ],
})
export class ReduxModule { }
