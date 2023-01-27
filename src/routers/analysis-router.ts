import { Router } from "express";
import { getAnalysis, postAnalysis, putAnalysis, deleteAnalysis } from "../controllers/analysis-controller.js";
import { questionsSchemaValidation, questionsUpdateValidation } from "../middlewares/analysis-middleware.js";
const router = Router();

router.get("/analysis", getAnalysis);
router.post("/analysis", questionsSchemaValidation, postAnalysis);
router.patch("/analysis/:id", questionsUpdateValidation, putAnalysis);
router.delete("/analysis/:id", deleteAnalysis);

export default router;