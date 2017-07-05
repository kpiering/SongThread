import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { AppState } from "app/redux/redux.module";
import { content } from "app/redux/selectors";
import { LoadStatus } from "app/redux/reducers/etsy.reducer";
import { Page } from "app/content/page";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  page$: Observable<Page>;
  loaded$: Observable<LoadStatus>;
  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.page$ = this.store.select<Page>(content.aboutPage);
    this.loaded$ = this.store.select<LoadStatus>(content.loadStatus);
  }
}
