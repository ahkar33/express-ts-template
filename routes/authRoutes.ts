import { login } from "@/controllers/authController";
import { rateLimit, withErrorHandling } from "@/middlewares";
import express from "express";

const router = express.Router();

router.post("/login", rateLimit, withErrorHandling(login));

export default router;
