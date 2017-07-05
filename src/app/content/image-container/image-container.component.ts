import { Component, OnInit, Input } from '@angular/core';
import { PageBlock } from "app/content/page-block";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { content } from "app/redux/selectors";
import { AppState } from "app/redux/redux.module";

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css']
})
export class ImageContainerComponent implements OnInit {
 @Input() block: PageBlock;
  
  currentLanguage$: Observable<string>;
  constructor( private store: Store<AppState> ) { }

  ngOnInit() { 

    this.currentLanguage$ = this.store.select<string>(content.currentLanguage);
  }
}
