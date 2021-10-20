import express from "express";
import {
  createOneUser,
  deleteOneUser,
  getAllUsers,
  getOneUser,
  updateOneUser,
} from "../controllers/user.controller";

const router = express.Router();

// GET ALL
router.get("/", getAllUsers);
// GET ONE
router.get("/:id", getOneUser);
// CREATE
router.post("/", createOneUser);
// UPDATE
router.put("/:id", updateOneUser);
// DELETE
router.delete("/:id", deleteOneUser);

export default router;
