import { Component, OnInit, Input } from '@angular/core';
import { PageBlock } from "app/content/page-block";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { content } from "app/redux/selectors";
import { AppState } from "app/redux/redux.module";

@Component({
  selector: 'app-subheader-container',
  templateUrl: './subheader-container.component.html',
  styleUrls: ['./subheader-container.component.css']
})
export class SubheaderContainerComponent implements OnInit {
  @Input() block: PageBlock;
  
  currentLanguage$: Observable<string>;
  constructor( private store: Store<AppState> ) { }

  ngOnInit() { 

    this.currentLanguage$ = this.store.select<string>(content.currentLanguage);
  }
}
