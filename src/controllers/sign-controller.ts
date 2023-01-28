import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { signUp, signIn } from "../protocols";
import { signUpService } from "../services/sign-service.js";
import { checkEmail } from "../repositories/sign-repository.js";

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

    const userBody = req.body as signIn;
    const secretKey = process.env.JWT_SECRET;
    const config = { expiresIn: 60 * 60 * 24 }

    try {

        const user = await checkEmail(userBody.email);

        if(user === null || user === undefined){
            return res.sendStatus(404);
        }

        const passwordConfirm = bcrypt.compareSync(userBody.password, user.password);

        if(!passwordConfirm){
            return res.status(401).send({message: "E-mail ou senha incorretos!"});
        }

        res.locals.userId = user.id;

        const userData = {name: user.name, userId: user.id};

        const token = jwt.sign(userData, secretKey, config);
      
        res.status(200).send({token: token, userId: user.id, name: user.name});
        
    } catch (error) {

        return res.status(500).send({ message: error.message });

    }
}