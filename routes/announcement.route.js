import express from "express";
import { getAnnouncements } from "../controllers/announcement.controller.js";

const router = express.Router();

router.get("/", getAnnouncements);


export default router;