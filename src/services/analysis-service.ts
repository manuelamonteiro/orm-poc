import { analysis, analysisPost } from "../protocols.js";
import { selectAllAnalysis, insertAnalysis, updateAnalysis, removeAnalysis, selectAnalysisById } from "../repositories/analysis-repository.js";

export async function getAnalysisService() {

    const analysisList = await selectAllAnalysis();
    return analysisList;

}

export async function postAnalysisService(analysis: analysisPost) {

    await insertAnalysis(analysis);

}

export async function putAnalysisService(analysis: analysisPost, id: number) {

    const isAnalysisExists = await selectAnalysisById(id);
    // if (!isAnalysisExists) throw { type: "humorNotExist", message: "O humor escolhido não existe!" }

    await updateAnalysis(analysis, id);

}

export async function deleteAnalysisService(id: number) {

    const isAnalysisExists = await selectAnalysisById(id);
    // if (!isAnalysisExists) throw { type: "humorNotExist", message: "O humor escolhido não existe!" }

    await removeAnalysis(id);
    
}