import prisma from "../database/db.js";
import { humorPost, humorUpdate } from "../protocols.js";

export async function selectAllHumors() {
    return prisma.humor.findMany();
}

export async function selectHumorsByMood(mood: string) {
    return prisma.humor.findMany({
        where: {
            mood: mood
        }
    })
}

export async function insertHumor(humor: humorPost, userId: number) {
    return prisma.humor.create({
        data: {
            userId,
            date: humor.date,
            mood: humor.mood,
            activities: humor.activities
        }
    })
}

export async function selectHumorById(id: number) {
    return prisma.humor.findFirst({
        where: {
            id: id
        }
    })
}

export async function updateHumor(humor: humorUpdate, id: number) {
    return prisma.humor.update({
        where: {
            id: id
        },
        data: {
            activities: humor.activities,
            mood: humor.mood
        }
    })
}

export async function removeHumor(id: number) {
    return prisma.humor.delete({
        where: {
            id: id
        }
    })
}
