import { Request, Response, NextFunction } from "express";
import { questionsPost, questionsUpdate } from "../schemas/analysis-schema.js";

export function questionsSchemaValidation(req: Request, res: Response, next: NextFunction) {

    const validationStatus = questionsPost.validate(req.body, { abortEarly: false });

    if (validationStatus.error) {
        const error = validationStatus.error.details.map((detail) => detail.message);
        res.status(400).send(error);
        return;
    };

    next();

}

export function questionsUpdateValidation(req: Request, res: Response, next: NextFunction) {

    const validationStatus = questionsUpdate.validate(req.body, { abortEarly: false });

    if (validationStatus.error) {
        const error = validationStatus.error.details.map((detail) => detail.message);
        res.status(400).send(error);
        return;
    };

    next();

}
