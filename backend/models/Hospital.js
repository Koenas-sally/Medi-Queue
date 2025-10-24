import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
  name: String,
  address: String,
  latitude: Number,
  longitude: Number,
  waitingTime: Number, // in minutes
  lastUpdated: { type: Date, default: Date.now },
});

export default mongoose.model("Hospital", hospitalSchema);
