import type { ClassValue, HTMLAttributes } from 'svelte/elements';


export type tMinMax = {
    min?: number;
    max?: number;
    as_delta?: boolean;
}

export type tXY = {
    x?: tMinMax;
    y?: tMinMax;
}

export type tPosition = {
    start?: tXY,
    end?: tXY
}

export type tParticleProps = HTMLAttributes<HTMLDivElement> & {
	// Classes:

	// --- Default Classes:
	particleClass?: ClassValue;

    // --- Position Props ---
    position?: tPosition;
};

export type tParticleGeneratorProps = HTMLAttributes<HTMLDivElement> & {
    // Classes:

    // --- Default Classes:
    generatorClass?: ClassValue,

    // --- Passed Down Classes ---
    particleClass?: ClassValue,

    // --- Generator Props ---
    count?: number;

    // --- Position Props ---
    position?: tPosition;
};