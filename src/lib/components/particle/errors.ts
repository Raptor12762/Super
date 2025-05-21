type ErrorName =
    | 'NO_POSITION_GIVEN'
    | 'INVALID_POSITION';

/**
 * Error implementation for the "particle" system.
 * Literally mostly Ctrl+C Ctrl+V'd this error class :)
 */
export class ParticleError extends Error {
    name: ErrorName;
    message: string;
    cause?: unknown;

    constructor({name, message, cause}: {
        name: ErrorName; message: string; cause?: unknown;
    }) {
        super();
        this.name = name;
        this.message = message;
        this.cause = cause;
    }
}