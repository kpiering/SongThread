import { Component, OnInit, Input } from '@angular/core';
import { PageBlock } from "app/content/page-block";
import { Observable } from "rxjs/Observable";
import { ContentConfig } from "app/content/content-config";
import { Store } from "@ngrx/store";
import { content } from "app/redux/selectors";
import { AppState } from "app/redux/redux.module";

@Component({
  selector: 'app-image-text-container',
  templateUrl: './image-text-container.component.html',
  styleUrls: ['./image-text-container.component.css']
})
export class ImageTextContainerComponent implements OnInit {
  @Input() block: PageBlock;
  
  currentLanguage$: Observable<string>;
  constructor( private store: Store<AppState> ) { }

  ngOnInit() { 

    this.currentLanguage$ = this.store.select<string>(content.currentLanguage);
  }

}
