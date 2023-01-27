import Joi from "joi";

export const humorAnalysisPost = Joi.object({
    date: Joi.string().min(5).required(),
    mood: Joi.valid("radiante", "bem", "mais ou menos", "mal").required(),
    activities: Joi.string().required()
});

export const humorAnalysisUpdate = Joi.object({
    mood: Joi.valid("radiante", "bem", "mais ou menos", "mal"),
    activities: Joi.string()
});