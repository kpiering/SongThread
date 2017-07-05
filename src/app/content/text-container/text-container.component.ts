import { Component, OnInit, Input } from '@angular/core';
import { PageBlock } from "app/content/page-block";
import { Observable } from "rxjs/Observable";
import { ContentConfig } from "app/content/content-config";
import { Store } from "@ngrx/store";
import { AppState } from "app/redux/redux.module";
import { content } from "app/redux/selectors";

@Component({
  selector: 'app-text-container',
  templateUrl: './text-container.component.html',
  styleUrls: ['./text-container.component.css']
})
export class TextContainerComponent implements OnInit {
  @Input() block: PageBlock;
  
  currentLanguage$: Observable<string>;
  constructor( private store: Store<AppState> ) { }

  ngOnInit() { 

    this.currentLanguage$ = this.store.select<string>(content.currentLanguage);
  }

}
