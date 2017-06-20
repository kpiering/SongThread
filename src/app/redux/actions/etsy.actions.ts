
import { Action } from "@ngrx/store";
import { EtsyShop } from "app/etsy/shop";
import { EtsyListing } from "app/etsy/listing";

export interface EtsyLoadCompletePayload {
    listings: EtsyListing[];
}

export class EtsyActions {
    static ETSY_LOAD_BEGIN = 'ETSY_LOAD_BEGIN';
    static ETSY_LOAD_COMPLETE = 'ETSY_LOAD_COMPLETE';
    static loadBegin(): Action {
        return {
            type: EtsyActions.ETSY_LOAD_BEGIN,
        };
    }

    static loadComplete(shop: EtsyShop): Action {
        const payload: EtsyLoadCompletePayload = {
            listings: shop.Listings,
        };

        return {
            type: EtsyActions.ETSY_LOAD_COMPLETE,
            payload,
        };
    }
}
