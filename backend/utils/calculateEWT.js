export function calculateEWT(avgTimePerPatient, patientsInQueue, avgTimePerEmergency, emergencies) {
  return (avgTimePerPatient * patientsInQueue) + (avgTimePerEmergency * emergencies);
}
