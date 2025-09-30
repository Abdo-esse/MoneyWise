// src/routes/auth.routes.js
import express from "express";
import {
signUpController,
loginController,
} from "../container.js";
import { redirectIfAuthenticated } from "../middleware/auth.js";

const router = express.Router();

// signup
router.get("/signup", redirectIfAuthenticated, signUpController.renderSignup);
router.post("/signup", redirectIfAuthenticated, signUpController.handleSignup);

// login
router.get("/login", redirectIfAuthenticated, loginController.renderLogin);
router.post("/login", redirectIfAuthenticated, loginController.handleLogin);

export default router;