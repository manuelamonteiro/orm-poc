import { Request, Response } from "express";
import { analysisPost } from "../protocols.js";
import { deleteAnalysisService, postAnalysisService, putAnalysisService, getAnalysisService } from "../services/analysis-service.js";

export async function getAnalysis(req: Request, res: Response) {

    try {

        const analysisList = await getAnalysisService();
        res.status(200).send(analysisList);
 
    } catch (error) {

        return res.status(500).send({ message: error.message });

    }

}

export async function postAnalysis(req: Request, res: Response) {

    const analysis = req.body as analysisPost;

    try {

        await postAnalysisService(analysis);
        res.status(201).send({ message: "Análise inserida com sucesso!" });

    } catch (error) {

        return res.status(500).send({ message: error.message });

    }

}

export async function putAnalysis(req: Request, res: Response) {

    const { id } = req.params;
    const analysis = req.body as analysisPost;

    try {

        await putAnalysisService(analysis, Number(id));
        res.status(200).send({ message: "Análise atualizada com sucesso!" });

    } catch (error) {

        // if(error.type === "humorNotExist"){
        //     return res.status(404).send({message: error.message})
        // }

        return res.status(500).send({ message: error.message });

    }

}

export async function deleteAnalysis(req: Request, res: Response) {

    const { id } = req.params;

    try {

        await deleteAnalysisService(Number(id));
        res.sendStatus(204);

    } catch (error) {

        // if(error.type === "humorNotExist"){
        //     return res.status(404).send({message: error.message})
        // }

        return res.status(500).send({ message: error.message });

    }

}