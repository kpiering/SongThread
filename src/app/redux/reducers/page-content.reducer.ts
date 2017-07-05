import { Action } from '@ngrx/store';
import { LoadStatus } from "app/redux/reducers/etsy.reducer";
import { PageContentActions, ContentLoadCompletePayload } from "app/redux/actions/page-content.actions";
import { PageContent } from "app/content/page-content";
import { Page } from "app/content/page";

export type Languages = 'english' | 'dutch'

export interface PageContentState {
    loaded: LoadStatus;
    ids: string[];
    pageContent: PageContent;
    currentLanguage: string;   
}

export const initial: PageContentState = {
    loaded: 'empty',
    ids: [],
    pageContent: {},
    currentLanguage: 'english',
};

export class PageContentReducer {
    static reduce(state: PageContentState = initial, action: Action): PageContentState {
        switch(action.type) {
            case PageContentActions.CONTENT_LOAD_BEGIN:
                return {
                    ...state,
                    loaded: 'loading',
                };
            case PageContentActions.CONTENT_LOAD_COMPLETE:
                const completePayload: ContentLoadCompletePayload = <ContentLoadCompletePayload>action.payload;
                const next: PageContentState =  {
                    ...state,
                    loaded: 'loaded',
                    pageContent: {
                        ...completePayload.pageContent,
                    },
                    currentLanguage: completePayload.pageContent.config.language,
                };
                return next;

            case PageContentActions.CONFIG_CHANGE_TO_ENGLISH:
                const english: PageContentState ={
                    ...state,
                    currentLanguage: 'english',
                }

               return english;

            case PageContentActions.CONFIG_CHANGE_TO_DUTCH:
                const dutch: PageContentState ={
                    ...state,
                    currentLanguage: 'dutch',
                }

               return dutch;
               
            default:
                return state;
        } 
    }
}
