import { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '../../errors/notFoundError';
import { JsonPatchError } from 'fast-json-patch';
import { ConflictError } from '../../errors/conflictError';

export function errorResponseCodeHandler(err: Error, req: Request, resp: Response, next: NextFunction): void {
    if (err instanceof NotFoundError) {
        resp.status(404);
    } else if (err instanceof ConflictError) {
        resp.status(409);
    } else if (err instanceof JsonPatchError) {
        resp.status(400);
    } else {
        resp.status(500);
    }


    next(err);
}