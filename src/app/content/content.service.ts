import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from "@angular/http";
import { Store } from "@ngrx/store";
import { AppState } from "app/redux/redux.module";
import { Observable } from "rxjs/Observable";
import { PageContent } from "app/content/page-content";
import { Subject } from "rxjs/Subject";
import { SyncStore } from "app/redux/selectors";
import { PageContentActions } from "app/redux/actions/page-content.actions";

@Injectable()
export class ContentService {

  getPagesUrl = 'http://cutekick.com/cache/content.json';
  pages: Observable<PageContent[]>;
  private pagesSubject: Subject<PageContent[]>;
  
  constructor(
    private http: Http, 
    private store: Store<AppState>
  ) { 
    this.pagesSubject = new Subject<PageContent[]>();
    this.pages = this.pagesSubject.asObservable();
  }

  getPages() {
    const state: AppState = SyncStore.getState(this.store);

   if (state.content.loaded === 'empty') {
      console.log('get page');
      const params: URLSearchParams = new URLSearchParams();
      this.store.dispatch(PageContentActions.loadBegin());
      const requestOptions: RequestOptions = new RequestOptions({
        search: params,
      });
      this.http.get(this.getPagesUrl, requestOptions).subscribe((res) => {
        const data: any = res.json();
        this.pagesSubject.next(data.results[0]);
        console.log(data.results[0]);
        this.store.dispatch(PageContentActions.loadComplete(data.results[0]));
      });
    }
  }

}
