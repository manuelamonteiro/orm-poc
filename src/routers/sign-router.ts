import { Router } from "express";
import { signIn, signUp } from "../controllers/sign-controller.js";
import { signInSchemaValidation, userSchemaValidation } from "../middlewares/sign-middleware.js";

const router = Router();

router.post("/sign-up", userSchemaValidation, signUp);
router.post("/sign-in", signInSchemaValidation, signIn);

export default router;