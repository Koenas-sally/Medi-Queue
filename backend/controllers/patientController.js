import Patient from "../models/Patient.js";

export const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find().populate("hospitalId", "name location");
    res.json(patients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createPatient = async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    const saved = await newPatient.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getPatientsByHospital = async (req, res) => {
  try {
    const patients = await Patient.find({ hospitalId: req.params.id });
    res.json(patients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
