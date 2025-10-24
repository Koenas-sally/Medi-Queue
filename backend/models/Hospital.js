import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  coordinates: {
    lat: Number,
    lng: Number,
  },
  categories: [String], // e.g. ["Emergency", "Pediatrics", "Diagnostics"]
  currentQueue: {
    patientsInQueue: { type: Number, default: 0 },
    emergencies: { type: Number, default: 0 },
    avgTimePerPatient: { type: Number, default: 15 },
    avgTimePerEmergency: { type: Number, default: 30 },
  },
});

export default mongoose.model("Hospital", hospitalSchema);

