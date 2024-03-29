import express from "express";

import { getQuizzes } from "../controllers/quiz.controller.js";

const router = express.Router();

router.get("/", getQuizzes);


export default router;