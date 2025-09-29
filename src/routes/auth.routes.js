// src/routes/auth.routes.js
import express from "express";
import {
signUpController,
loginController,
} from "../container.js";

const router = express.Router();

// signup
router.get("/signup", signUpController.renderSignup);
router.post("/signup", signUpController.handleSignup);

// login
router.get("/login", loginController.renderLogin);
router.post("/login", loginController.handleLogin);

export default router;