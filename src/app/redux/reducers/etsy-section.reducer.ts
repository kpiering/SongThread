import { Action } from '@ngrx/store';
import { EtsyActions, EtsyLoadCompletePayload, EtsySectionShowMorePayload } from "app/redux/actions/etsy.actions";
import { EtsySection } from "app/etsy/section";

export interface SectionState {
    ids: number[];
    [id: number]: EtsySection;
    
}

export const initial: SectionState = {
    ids: [],
};

export class EtsySectionReducer {
    static reduce(state: SectionState = initial, action: Action): SectionState {
        switch(action.type) {
            case EtsyActions.ETSY_LOAD_COMPLETE:
                const completePayload: EtsyLoadCompletePayload = <EtsyLoadCompletePayload>action.payload;
                return completePayload.sections;

            case EtsyActions.ETSY_SHOW_MORE:
                const showMorePayload: EtsySectionShowMorePayload = <EtsySectionShowMorePayload>action.payload;
                const section: EtsySection = state[showMorePayload.id];
                return {
                    ...state,
                    [showMorePayload.id]: {
                        ...section,
                        rowLimit: showMorePayload.newLimit,
                    },
                };

            default:
                return state;
        } 
    }
}
