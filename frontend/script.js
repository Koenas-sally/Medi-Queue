const hospitals = [
  { name: "City Hospital", category: "general", location: "Downtown", time: "15 min" },
  { name: "Metro Diagnostic Center", category: "machine", location: "Uptown", time: "30 min" },
  { name: "Sunrise Maternity", category: "kids", location: "Suburb", time: "10 min" },
];

const hospitalList = document.getElementById("hospital-list");
const filterButtons = document.querySelectorAll(".filter-btn");

function displayHospitals(filtered = hospitals) {
  hospitalList.innerHTML = filtered
    .map(
      (h) => `
    <div class="hospital-card">
      <h3>${h.name}</h3>
      <p><strong>Location:</strong> ${h.location}</p>
      <p><strong>Category:</strong> ${h.category}</p>
      <p><strong>Wait Time:</strong> ${h.time}</p>
    </div>`
    )
    .join("");
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const id = btn.id;
    if (id === "allBtn") displayHospitals();
    else if (id === "generalBtn") displayHospitals(hospitals.filter((h) => h.category === "general"));
    else if (id === "machineBtn") displayHospitals(hospitals.filter((h) => h.category === "machine"));
    else if (id === "kidsBtn") displayHospitals(hospitals.filter((h) => h.category === "kids"));
  });
});

displayHospitals();

