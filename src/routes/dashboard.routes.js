// src/routes/dashboard.routes.js
import express from "express";
import { renderDashboard, renderTransactions, renderBudgets } from "../controllers/page.controller.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

// signup
router.get("/", isAuthenticated, renderDashboard);
router.get("/transactions", isAuthenticated, renderTransactions);
router.get("/budgets", isAuthenticated, renderBudgets);


export default router;