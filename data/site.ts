// Informations générales — modifie-les ici, elles sont utilisées partout sur le site.
export const site = {
  name: "Youssef Ounana",
  role: "Développeur Full-Stack & DevOps",
  email: "youssefounana@gmail.com", // ← vérifie que c'est bien l'adresse donnée aux recruteurs
  github: "https://github.com/Youssef-Ounana",
  linkedin: "https://linkedin.com/in/youssef-ounana/",
  cv: "/OUNANA-YOUSSEF-CV.pdf",
  location: "Avignon, mobile partout en France",
  availability: "Disponible en alternance · 4 j entreprise / 1 j école",
};

// Lien mailto avec un objet pré-rempli
export const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
  "Contact depuis ton portfolio"
)}`;
