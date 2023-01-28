import prisma from "../database/db.js";
import { analysisPost } from "../protocols.js";

export async function selectAllAnalysis() {
    return prisma.analysis.findMany();
}

export async function insertAnalysis(analysis: analysisPost, userId: number) {
    return prisma.analysis.create({
        data: {
            userId,
            humorwhy: analysis.humorWhy,
            howtochange: analysis.howToChange
        }    
    })
}

export async function selectAnalysisById(id: number) {
    return prisma.analysis.findFirst({
        where: {
            id: id
        }
    })
}

export async function updateAnalysis(analysis: analysisPost, id: number) {
    return prisma.analysis.update({
        where: {
            id: id
        },
        data: {
            humorwhy: analysis.humorWhy,
            howtochange: analysis.howToChange
        }
    })
}

export async function removeAnalysis(id: number) {
    return prisma.analysis.delete({
        where: {
            id: id
        }
    })
}