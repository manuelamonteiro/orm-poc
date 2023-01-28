import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { signInSchema, userSchema } from "../schemas/sign-schema.js";
import { selectUser } from "../repositories/sign-repository.js";
import { signIn } from "../protocols.js";

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

    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    const secretKey = process.env.JWT_SECRET;

    if (!token) {
        return res.sendStatus(401);
    }

    interface JwtPayload {
        userId: string;
    }

    try {
        
        const userData = jwt.verify(token, secretKey) as JwtPayload;

        const userRows = await selectUser(Number(userData.userId));

        if (userRows === null || userRows === undefined) {
            return res.status(401).send({message: "Usuário inválido!"});
        }

        res.locals.user = userData;

    } catch (error){

        return res.status(500).send({ message: error.message });

    }
    
    next();

}