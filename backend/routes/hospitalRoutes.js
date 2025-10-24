// routes/hospitalRoutes.js
import express from "express";
import Hospital from "../models/Hospital.js";

const router = express.Router();

// Get all hospitals
router.get("/", async (req, res) => {
  const hospitals = await Hospital.find();
  res.json(hospitals);
});

// Add a new hospital
router.post("/", async (req, res) => {
  const hospital = new Hospital(req.body);
  await hospital.save();
  res.status(201).json(hospital);
});

// Update waiting time
router.put("/:id", async (req, res) => {
  const { waitingTime } = req.body;
  const updated = await Hospital.findByIdAndUpdate(req.params.id, { waitingTime, lastUpdated: Date.now() }, { new: true });
  res.json(updated);
});

export default router;
