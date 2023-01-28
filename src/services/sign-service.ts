import { checkEmail, insertUser } from "../repositories/sign-repository.js";

export async function signUpService(name: string, email: string, passwordHash: string) {

    const isEmailRegistered = await checkEmail(email);

      if (isEmailRegistered) throw {type: "EMAIL_ALREADY_EXISTS", message: "O e-mail já está cadastrado!"}


    await insertUser(name, email, passwordHash);

}
