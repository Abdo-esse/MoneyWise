import express from "express";
import { isAuthenticated } from "../middleware/auth.js";
import { transactionController } from "../container.js";

const router = express.Router();


router.post("/", isAuthenticated, transactionController.create);
router.put("/:id", isAuthenticated, transactionController.update);
router.delete("/:id", isAuthenticated, transactionController.delete);


export default router;