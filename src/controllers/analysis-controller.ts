import { Request, Response } from "express";
import { deleteAnalysisService, postAnalysisService, putAnalysisService, getAnalysisService } from "../services/analysis-service.js";

export async function getAnalysis(req: Request, res: Response) {

    try {

    } catch (error) {
        return res.status(500).send({ message: error.message });
    }

}

export async function postAnalysis(req: Request, res: Response) {

    try {

    } catch (error) {
        return res.status(500).send({ message: error.message });
    }

}

export async function putAnalysis(req: Request, res: Response) {

    const { id } = req.params;

    try {

    } catch (error) {
        return res.status(500).send({ message: error.message });
    }

}

export async function deleteAnalysis(req: Request, res: Response) {

    const { id } = req.params;

    try {

    } catch (error) {
        return res.status(500).send({ message: error.message });
    }

}