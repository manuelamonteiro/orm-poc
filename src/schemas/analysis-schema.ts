import Joi from "joi";

export const questionsPost = Joi.object({
    humorWhy: Joi.string().min(10).required(),
    howToChange: Joi.string().min(10).required()
});