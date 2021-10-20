import express from "express";
import authRouter from "./auth.route";
import baRouter from "./ba.route";
import userRouter from "./user.route";

const router = express.Router();

router.use("/auth", authRouter);

router.use("/ba", baRouter);

router.use("/users", userRouter);

export default router;
