import Hospital from "../models/Hospital.js";

export const getHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.json(hospitals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createHospital = async (req, res) => {
  try {
    const newHospital = new Hospital(req.body);
    const saved = await newHospital.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
