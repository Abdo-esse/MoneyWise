// src/routes/dashboard.routes.js
import express from "express";
import { renderDashboard } from "../controllers/page.controller.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

// signup
router.get("/", isAuthenticated, renderDashboard);


export default router;