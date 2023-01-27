import { Request, Response } from "express";
import { selectAllHumors, selectHumorsByMood, insertHumor, updateHumor, removeHumor, selectHumorById } from "../repositories/humor-repository.js";
import { humorPost, humorUpdate } from "../protocols.js";

export async function getHumorsServiceByQuery(mood: string) {

    if (mood) {
        const moodList = await selectHumorsByMood(mood);
        return moodList;
    }

}

export async function getHumorsService() {

    const humorsList = await selectAllHumors();
    return humorsList;

}

export async function postHumorService(humor: humorPost) {

    await insertHumor(humor);
 
}

export async function putHumorService(humor: humorUpdate, id: number) {

    const isHumorExists = await selectHumorById(id);
    if (isHumorExists === null || isHumorExists === undefined) throw { type: "humorNotExist", message: "O humor escolhido não existe!" }
    
    await updateHumor(humor, id);

}

export async function deleteHumorService(id: number) {

    const isHumorExists = await selectHumorById(id);
    if (isHumorExists === null || isHumorExists === undefined) throw { type: "humorNotExist", message: "O humor escolhido não existe!" }

    await removeHumor(id);

}