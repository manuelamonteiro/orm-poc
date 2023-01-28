import { Router } from "express";
import { getAnalysis, postAnalysis, putAnalysis, deleteAnalysis } from "../controllers/analysis-controller.js";
import { questionsSchemaValidation, questionsUpdateValidation } from "../middlewares/analysis-middleware.js";
import { hasToken } from "../middlewares/sign-middleware.js";

const router = Router();

router.get("/analysis", hasToken, getAnalysis);
router.post("/analysis", hasToken, questionsSchemaValidation, postAnalysis);
router.patch("/analysis/:id", hasToken, questionsUpdateValidation, putAnalysis);
router.delete("/analysis/:id", hasToken, deleteAnalysis);

export default router;