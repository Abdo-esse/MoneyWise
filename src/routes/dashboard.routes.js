// src/routes/dashboard.routes.js
import express from "express";
import { 
    renderDashboard,
    renderBudgets, 
    renderObjectives, 
    renderProfile, 
    renderReports,
} from "../controllers/page.controller.js";
import { isAuthenticated } from "../middleware/auth.js";
import { categoryController, transactionController } from "../container.js";

const router = express.Router();

// signup
router.get("/", isAuthenticated, renderDashboard);
router.get("/transactions", isAuthenticated, transactionController.getAll);
router.get("/budgets", isAuthenticated, renderBudgets);
router.get("/objectives", isAuthenticated, renderObjectives);
router.get("/profile", isAuthenticated, renderProfile);
router.get("/reports", isAuthenticated, renderReports);
router.get("/categories", isAuthenticated, categoryController.getCategories);


export default router;