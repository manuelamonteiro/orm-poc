import { Router } from "express";
import { getHumors, postHumor, putHumor, deleteHumor } from "../controllers/humor-controller.js";
import { postSchemaValidation, updateSchemaValidation } from "../middlewares/humor-middleware.js";

const router = Router();

router.get("/humors", getHumors);
router.post("/humor", postSchemaValidation, postHumor);
router.patch("/humor/:id", updateSchemaValidation, putHumor);
router.delete("/humor/:id", deleteHumor);

export default router;