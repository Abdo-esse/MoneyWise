// src/routes/dashboard.routes.js
import express from "express";
import { isAuthenticated } from "../middleware/auth.js";
import { categoryController } from "../container.js";

const router = express.Router();

// signup
router.post("/", isAuthenticated, categoryController.createCategory);
router.put("/:id", isAuthenticated, categoryController.updateCategory);
router.delete("/:id", isAuthenticated, categoryController.deleteCategory);


export default router;