import express from "express";

import {
  signUpController,
  signInController,
} from "../controllers/auth.controller";

const router = express.Router();

// Login
router.post("/login", signInController);

// Register
router.post("/register", signUpController);

export default router;
