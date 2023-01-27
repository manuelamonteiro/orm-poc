import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { signUp, signIn } from "../protocols";
import { signUpService } from "../services/sign-service.js";

export async function signUp(req: Request, res: Response) {

    const user = req.body as signUp;
    const passwordHash = bcrypt.hashSync(user.password, 10);

    try {

        await signUpService(user.name, user.email, passwordHash);
        res.status(201).send({ message: "O usuário foi criado com sucesso!" });

    } catch (error) {

        if (error.type === "EMAIL_ALREADY_EXISTS") {
            return res.status(404).send({ message: error.message })
        }

        return res.status(500).send({ message: error.message });

    }
}

export async function signIn(req: Request, res: Response) {


    try {

    } catch (error) {

        return res.status(500).send({ message: error.message });

    }
}