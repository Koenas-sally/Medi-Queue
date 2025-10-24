import express from "express";
import { getPatients, createPatient, getPatientsByHospital } from "../controllers/patientController.js";

const router = express.Router();

router.get("/", getPatients);
router.post("/", createPatient);
router.get("/hospital/:id", getPatientsByHospital);

export default router;
