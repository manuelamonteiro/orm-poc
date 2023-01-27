import prisma from "../database/db.js";

export async function checkEmail(email: string){
    return prisma.users.findFirst({
        where: {
            email: email
        }
    })
}

export async function selectUser (userId: number){
    return prisma.users.findFirst({
        where: {
            id: userId
        }
    })
}

export async function insertUser(name: string,email: string,passwordHash: string){
    return  prisma.users.create({
        data: {
            name: name,
            email: email,
            password: passwordHash
        }
    })
}