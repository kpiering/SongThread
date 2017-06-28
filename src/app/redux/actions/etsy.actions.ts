
import { Action } from "@ngrx/store";
import { EtsyShop } from "app/etsy/shop";
import { EtsyListing } from "app/etsy/listing";
import { SectionState } from "app/redux/reducers/etsy-section.reducer";
import { EtsySection } from "app/etsy/section";

export interface EtsyLoadCompletePayload {
    listings: EtsyListing[];
    sections: SectionState;
    shop: EtsyShop;
}

export interface EtsySectionShowMorePayload {
    id: number;
    newLimit: number;
}

export class EtsyActions {
    static ETSY_LOAD_BEGIN = 'ETSY_LOAD_BEGIN';
    static ETSY_LOAD_COMPLETE = 'ETSY_LOAD_COMPLETE';
    static ETSY_SHOW_MORE = 'ETSY_SHOW_MORE';
    static loadBegin(): Action {
        return {
            type: EtsyActions.ETSY_LOAD_BEGIN,
        };
    }

    static loadComplete(shop: EtsyShop, sections: SectionState): Action {
        const payload: EtsyLoadCompletePayload = {
            listings: shop.Listings,
            sections,
            shop,
        };

        return {
            type: EtsyActions.ETSY_LOAD_COMPLETE,
            payload,
        };
    }

    static showMore(section:EtsySection): Action {
        const payload: EtsySectionShowMorePayload = {
            id: section.shop_section_id,
            newLimit: section.rowLimit + 4, //update here
        };

        return {
            type: EtsyActions.ETSY_SHOW_MORE,
            payload,
        }
    }
}
