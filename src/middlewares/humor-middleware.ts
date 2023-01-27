import { Request, Response, NextFunction } from "express";
import { humorAnalysisPost, humorAnalysisUpdate } from "../schemas/humor-schema.js";

export function postSchemaValidation(req: Request, res: Response, next: NextFunction) {

    const validationStatus = humorAnalysisPost.validate(req.body, { abortEarly: false });

    if (validationStatus.error) {
        const error = validationStatus.error.details.map((detail) => detail.message);
        res.status(400).send(error);
        return;
    };

    next();

}

export function updateSchemaValidation(req: Request, res: Response, next: NextFunction) {

    const validationStatus = humorAnalysisUpdate.validate(req.body, { abortEarly: false });

    if (validationStatus.error) {
        const error = validationStatus.error.details.map((detail) => detail.message);
        res.status(400).send(error);
        return;
    };

    next();

}

