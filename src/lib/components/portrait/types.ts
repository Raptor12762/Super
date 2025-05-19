import type { ClassValue, HTMLImgAttributes } from "svelte/elements";

export type tPortraitProps = HTMLImgAttributes & {
    // Classes:

    // --- Default Classes:
    portraitClass?: ClassValue,
    
    // Extra Props Here:
    name?: string;
};
export type tPortraitShattershotProps = HTMLAttributes<HTMLDivElement> & {
    // Classes:

    // --- Default Classes:
    shattershotClass?: ClassValue,
    
    // Extra Props Here:
};

export type tPortraitSeethruProps = HTMLAttributes<HTMLDivElement> & {
    // Classes:

    // --- Default Classes:
    seethruClass?: ClassValue,
    
    // Extra Props Here:
};