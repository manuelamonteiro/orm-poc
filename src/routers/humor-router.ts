import { Router } from "express";
import { getHumors, postHumor, putHumor, deleteHumor } from "../controllers/humor-controller.js";
import { postSchemaValidation, updateSchemaValidation } from "../middlewares/humor-middleware.js";
import { hasToken } from "../middlewares/sign-middleware.js";

const router = Router();

router.get("/humors", hasToken, getHumors);
router.post("/humor", hasToken, postSchemaValidation, postHumor);
router.patch("/humor/:id", hasToken, updateSchemaValidation, putHumor);
router.delete("/humor/:id", hasToken, deleteHumor);

export default router;