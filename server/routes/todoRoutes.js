import express from "express";
import {
  completeTask,
  createTask,
  deleteTask,
  getAllTask,
} from "../controllers/todoContoller.js";

const router = express.Router();

router.post("/create", createTask);
router.get("/getall", getAllTask);
router.delete("/delete", deleteTask);
router.post("/complete", completeTask);

export default router;
