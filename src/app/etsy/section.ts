import { EtsyListing } from "app/etsy/listing";

export type EtsySection = {
    shop_section_id: number,
    title: string,
    rank: number,
    user_id: number,
    active_listing_count: string,
    listingIds: number[],
    rowLimit: number,
};
