
import { Action } from "@ngrx/store";
import { PageContent } from "app/content/page-content";
import { ContentConfig } from "app/content/content-config";

export interface ContentLoadCompletePayload {
    pageContent: PageContent;
}

export class PageContentActions {
    static CONTENT_LOAD_BEGIN = 'CONTENT_LOAD_BEGIN';
    static CONTENT_LOAD_COMPLETE = 'CONTENT_LOAD_COMPLETE';
    static CONFIG_CHANGE_TO_ENGLISH = 'CONFIG_CHANGE_TO_ENGLISH';
    static CONFIG_CHANGE_TO_DUTCH = 'CONFIG_CHANGE_TO_DUTCH';

    static loadBegin(): Action {
        return {
            type: PageContentActions.CONTENT_LOAD_BEGIN,
        };
    }

    static loadComplete(pageContent: PageContent): Action {
        const payload: ContentLoadCompletePayload = {
           pageContent,
        };

        return {
            type: PageContentActions.CONTENT_LOAD_COMPLETE,
            payload,
        };
    }

    static changeToEnglish(): Action {
        return {
            type: PageContentActions.CONFIG_CHANGE_TO_ENGLISH,
        };
    }

    static changeToDutch(): Action {
        return {
            type: PageContentActions.CONFIG_CHANGE_TO_DUTCH,
        };
    }
}
