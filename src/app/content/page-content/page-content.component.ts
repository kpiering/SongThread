import { Component, OnInit, Input } from '@angular/core';
import { PageBlock } from "app/content/page-block";
import { Observable } from "rxjs/Observable";
import { ContentConfig } from "app/content/content-config";
import { Store } from "@ngrx/store";
import { AppState } from "app/redux/redux.module";
import { content } from "app/redux/selectors";

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css']
})
export class PageContentComponent implements OnInit {
  @Input() pageBlocks: PageBlock[];

  currentLanguage$: Observable<string>;
  constructor( private store: Store<AppState> ) { }

  ngOnInit() { 
    this.currentLanguage$ = this.store.select<string>(content.currentLanguage);
  }
}
