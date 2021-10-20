import express from "express";
import {
  getAll,
  getOneBa,
  createOne,
  updateOne,
  deleteOne,
  getAllBa,
} from "../controllers/ba.controller";

const router = express.Router();

// GET ALL
router.get("/", getAllBa);
// GET ONE
router.get("/:baId", getOneBa);
// CREATE
router.post("/", createOne);
// UPDATE
router.put("/:id", updateOne);
// DELETE
router.delete("/:id", deleteOne);

export default router;
