import express from "express";
import { createTask, deleteTask, getAllTask } from "../controllers/todoContoller.js";

const router = express.Router();

router.post("/create", createTask);
router.get("/getall", getAllTask);
router.delete("/delete", deleteTask);


export default router;
