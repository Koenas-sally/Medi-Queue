import mongoose from "mongoose";

const queueSchema = new mongoose.Schema({
  hospitalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
    required: true,
  },
  patientsInQueue: { type: Number, default: 0 },
  emergencies: { type: Number, default: 0 },
  avgTimePerPatient: { type: Number, default: 15 }, // minutes
  avgTimePerEmergency: { type: Number, default: 30 }, // minutes
  lastUpdated: { type: Date, default: Date.now },
});

export default mongoose.model("Queue", queueSchema);
