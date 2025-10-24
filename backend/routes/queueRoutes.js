import express from "express";
import { getQueueByHospital, updateQueue } from "../controllers/queueController.js";

const router = express.Router();

router.get("/:id", getQueueByHospital);
router.put("/:id", updateQueue);

export default router;
