import prisma from "../src/database/db.js";

async function main() {

    await prisma.users.create({
        data: {
            name: "Joana",
            email: "joana@gmail.com",
            password: "123456"
        }
    })

}

main()
    .then(() => console.log("Deu bom!"))
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => await prisma.$disconnect())