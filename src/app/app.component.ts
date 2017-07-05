import { Component, OnInit } from '@angular/core';
import { ContentService } from "app/content/content.service";
import { Store } from "@ngrx/store";
import { AppState } from "app/redux/redux.module";
import { PageContentActions } from "app/redux/actions/page-content.actions";
import { Observable } from "rxjs/Observable";
import { content } from "app/redux/selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'ng-demos';
  currentLanguage$: Observable<string>;
  
  constructor( 
    private contentService: ContentService, 
    private store: Store<AppState> ) {  }

  ngOnInit() { 
    this.contentService.getPages();
    this.currentLanguage$ = this.store.select<string>(content.currentLanguage);
   }

  changeToEnglish(){
    this.store.dispatch(PageContentActions.changeToEnglish());
  }
  
  changeToDutch(){
    this.store.dispatch(PageContentActions.changeToDutch());
  }
}
