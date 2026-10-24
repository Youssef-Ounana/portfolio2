export type SkillGroup = {
  category: string;
  description: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Front-end",
    description: "Interfaces modernes, animées et responsives.",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Motion"],
  },
  {
    category: "Back-end",
    description: "API REST, authentification et logique métier.",
    items: ["Node.js", "Express", "NestJS", "PHP", "Java", "Python", "C++"],
  },
  {
    category: "Bases de données",
    description: "Modélisation relationnelle et documents.",
    items: ["PostgreSQL", "Prisma", "MongoDB"],
  },
  {
    category: "DevOps & outils",
    description: "Conteneurs, déploiement et intégration continue.",
    items: ["Docker", "Nginx", "GitHub Actions", "Git", "Linux", "Vercel"],
  },
];

// Liste à plat pour le bandeau défilant
export const allSkills = skills.flatMap((g) => g.items);
