export type PageTypes = 'text' | 'imagetext' | 'header' | 'subheader' | 'textlink';
export type ImageSide = 'right' | 'left' | 'center';

export type PageBlock = {
    type: PageTypes,
    link_url?: string,
    image_url?: string,
    image_side?:ImageSide,
    align?:string,
    english?: string,
    dutch?: string,
};
