import express from "express";
import cors from "cors";
import humorRouter from "./routers/humor-router.js";
import analysisRouter from "./routers/analysis-router.js"
import signRouter from "./routers/sign-router.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use(signRouter, humorRouter, analysisRouter);

const port = 5000;
app.listen(port, () => console.log(`Server running in port ${port}`));