import Joi from "joi";

export const questionsPost = Joi.object({
    humorWhy: Joi.string().min(5).required(),
    howToChange: Joi.string().min(5).required()
});

export const questionsUpdate = Joi.object({
    humorWhy: Joi.string().min(5),
    howToChange: Joi.string().min(5)
});