const projects = {
  perso: [
    {
      name: "Calculateur de prêt",
      type: "Outil personnel",
      link: "https://maelgruand1.github.io/CalculateurPret/",
    },
    {
      name: "Calendrier Web",
      type: "Web App",
      link: "https://maelgruand1.github.io/webCalendar/see-calendar.html",
    },
  ],
  pro: [
    {
      name: "Page web de jeux vidéos",
      type: "Projet Étudiant",
      link: "https://maelgruand1.github.io/WebVideoJuegos/",
    },
    {
      name: "DevShop",
      type: "E-commerce",
      link: "https://maelgruand1.github.io/DevShop/",
    },
  ],
};

function toggleTable(section) {
  const table = document.getElementById("projectTable");
  const tableBody = document.getElementById("tableBody");

  // Injecte les données de la section sélectionnée
  tableBody.innerHTML = "";
  projects[section].forEach((project) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${project.name}</td>
        <td>${project.type}</td>
        <td><a href="${project.link}" target="_blank">Voir le projet</a></td>
      `;
    tableBody.appendChild(row);
  });

  // Basculer la classe 'hidden' pour afficher ou masquer la table
  table.classList.remove("hidden");
}
const elements = {
  button: document.getElementById("detail"),
  section: document.getElementById("description"),
  btnProj: document.getElementById("proj"),
  project: document.getElementById("seeProjet"),
  buttonPerso: document.getElementById("persoBtn"),
  buttonStud: document.getElementById("EstBtn"),
  persoSect: document.getElementById("perso"),
  proSect: document.getElementById("pro"),
  classHidden: "hidden",
};

// Fonction générique pour gérer le toggle
const toggleVisibility = (button, target) => {
  if (!button || !target) return; // Vérifie que les éléments existent
  button.addEventListener("click", () => {
    const isHidden = target.classList.toggle(elements.classHidden);
    console.log(`Section ${isHidden ? "masquée" : "montrée"} : ${target.id}`);
    // Ajout d'animation
    if (!isHidden) {
      target.classList.add("show");
    } else {
      target.classList.remove("show");
    }
  });
};

// Application de la fonction aux éléments
toggleVisibility(elements.button, elements.section);
toggleVisibility(elements.btnProj, elements.project);
toggleVisibility(elements.buttonPerso, elements.persoSect);
toggleVisibility(elements.buttonStud, elements.proSect);

// Ajout pour accessibilité (bonus)
document.querySelectorAll("button").forEach((btn) => {
  btn.setAttribute("aria-expanded", false);
  btn.addEventListener("click", () => {
    const targetId = btn.dataset.section;
    const target = document.getElementById(targetId);
    if (target) {
      const isExpanded = target.classList.contains(elements.classHidden)
        ? "false"
        : "true";
      btn.setAttribute("aria-expanded", isExpanded);
    }
  });
});
