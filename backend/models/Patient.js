import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String },
  category: {
    type: String,
    enum: [
      "Emergency/Critical Care",
      "Simple Walk-In",
      "General Consultation",
      "Specialist Consultation",
      "Diagnostic/Test",
      "Pediatric/Elderly/PWD",
      "Vaccination & Wellness",
      "Pre/Post-Operative Check"
    ],
    required: true,
  },
  hospitalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
    required: true,
  },
  appointmentTime: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Patient", patientSchema);
