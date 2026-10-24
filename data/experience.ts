export type ExperienceItem = {
  type: "formation" | "experience";
  title: string;
  place: string;
  period: string;
  details: string | null;
  tags?: string[];
};

// Du plus récent au plus ancien
export const experience: ExperienceItem[] = [
  {
    type: "formation",
    title: "Mastère Ingénierie Avancée du Logiciel",
    place: "ISCOD — en alternance",
    period: "2026 – 2028",
    details: "Rythme 4 jours en entreprise / 1 jour en formation. Architecture logicielle, DevOps et sécurité.",
  },
  {
    type: "experience",
    title: "Stage développeur full-stack",
    place: "CMGP — Casablanca",
    period: "11/2025 – 01/2026",
    details: "Développement full-stack, mise en place de pipelines CI/CD et conteneurisation avec Docker.",
    tags: ["Full-stack", "CI/CD", "Docker"],
  },
  {
    type: "experience",
    title: "Stage développeur front-end",
    place: "Fedaso",
    period: "07/2025 – 08/2025",
    details: "Intégration d'interfaces en React et Tailwind CSS.",
    tags: ["React", "Tailwind CSS"],
  },
  {
    type: "formation",
    title: "Licence Informatique",
    place: "Université d'Avignon",
    period: "2025",
    details: null,
  },
  {
    type: "experience",
    title: "Inventoriste / Chef d'équipe",
    place: "RGIS France — Avignon",
    period: "Depuis 2021",
    details:
      "En parallèle des études : organisation des missions d'inventaire, encadrement d'équipe, respect des délais chez le client.",
    tags: ["Gestion d'équipe", "Rigueur"],
  },
];
