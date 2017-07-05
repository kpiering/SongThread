import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { EtsyReducer, EtsyState } from './reducers/etsy.reducer'
import { EtsySectionReducer, SectionState } from "app/redux/reducers/etsy-section.reducer";
import { PageContentState, PageContentReducer } from "app/redux/reducers/page-content.reducer";


export interface AppState {
  etsy: EtsyState;
  sections: SectionState;
  content : PageContentState;
}

@NgModule({
 imports: [
   StoreModule.provideStore({
     etsy: EtsyReducer.reduce, 
     sections: EtsySectionReducer.reduce,
     content: PageContentReducer.reduce,
   }),
   StoreDevtoolsModule.instrumentOnlyWithExtension(),
 ],
})
export class ReduxModule { }
