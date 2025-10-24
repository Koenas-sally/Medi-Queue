import Queue from "../models/Queue.js";
import { calculateEWT } from "../utils/calculateEWT.js";

export const getQueueByHospital = async (req, res) => {
  try {
    const queue = await Queue.findOne({ hospitalId: req.params.id });
    if (!queue) return res.status(404).json({ message: "Queue not found" });

    const ewt = calculateEWT(
      queue.avgTimePerPatient,
      queue.patientsInQueue,
      queue.avgTimePerEmergency,
      queue.emergencies
    );

    res.json({ ...queue.toObject(), estimatedWaitingTime: ewt });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateQueue = async (req, res) => {
  try {
    const updated = await Queue.findOneAndUpdate(
      { hospitalId: req.params.id },
      req.body,
      { new: true, upsert: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
