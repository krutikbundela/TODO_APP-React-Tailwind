import express from "express";
import { createTask, getAllTask } from "../controllers/todoContoller.js";

const router = express.Router();

router.post("/create", createTask);
router.get("/getall", getAllTask);


export default router;
