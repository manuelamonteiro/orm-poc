import { Request, Response, NextFunction } from "express";
import { signInSchema, userSchema } from "../schemas/sign-schema.js";
import { selectUser } from "../repositories/sign-repository.js";

export function userSchemaValidation(req: Request, res: Response, next: NextFunction) {

    const validationStatus = userSchema.validate(req.body, { abortEarly: false });

    if (validationStatus.error) {
        const error = validationStatus.error.details.map((detail) => detail.message);
        res.status(400).send(error);
        return;
    };

    next();

}

export function signInSchemaValidation(req: Request, res: Response, next: NextFunction) {

    const validationStatus = signInSchema.validate(req.body, { abortEarly: false });

    if (validationStatus.error) {
        const error = validationStatus.error.details.map((detail) => detail.message);
        res.status(400).send(error);
        return;
    };

    next();

}

export async function hasToken(req: Request, res: Response, next: NextFunction) {

  }