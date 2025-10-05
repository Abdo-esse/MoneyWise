// src/routes/dashboard.routes.js
import express from "express";
import { 
    renderDashboard,
    renderTransactions, 
    renderBudgets, 
    renderObjectives, 
    renderProfile, 
    renderReports,
    renderCategories 
} from "../controllers/page.controller.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

// signup
router.get("/", isAuthenticated, renderDashboard);
router.get("/transactions", isAuthenticated, renderTransactions);
router.get("/budgets", isAuthenticated, renderBudgets);
router.get("/objectives", isAuthenticated, renderObjectives);
router.get("/profile", isAuthenticated, renderProfile);
router.get("/reports", isAuthenticated, renderReports);
router.get("/categories", isAuthenticated, renderCategories);


export default router;