# Portfolio créatif — Youssef Ounana

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-FF0055?style=flat&logo=framer&logoColor=white)

Version créative de mon portfolio, centrée sur le **front-end et les animations** : projets, compétences, parcours et contact.

> Portfolio principal : [youssefounana.vercel.app](https://youssefounana.vercel.app)

## ✨ Effets et interactions

| Section | Effet | Technique |
|---|---|---|
| Accueil | Rayons lumineux qui explosent en touchant le bas de l'écran | Détection de collision avec `getBoundingClientRect`, animations Motion |
| Accueil | Titre qui apparaît mot par mot, du flou au net | `useAnimate` + `stagger` |
| Navigation | Barre flottante qui se cache quand on descend et revient quand on remonte | `useScroll` + `useMotionValueEvent` |
| À propos | Texte qui s'éclaire au fil du défilement | `useScroll` + `useTransform` par mot |
| Projets | Filtre avec pastille animée, fond qui glisse d'une carte à l'autre | `layoutId` partagé |
| Projets | Fenêtre de détail (Échap, clic extérieur, focus géré) | `AnimatePresence`, animation spring |
| Compétences | Bandeaux défilant à l'infini, cartes avec halo qui suit la souris | Animation CSS, `useMotionTemplate` |
| Parcours | Frise dont la ligne se remplit au défilement | `useScroll` lié à la section |
| Contact | Bouton `mailto` et copie de l'adresse en un clic | API Clipboard |

**Accessibilité :** les animations sont désactivées si le visiteur a activé « réduire les animations » dans son système (`MotionConfig reducedMotion="user"`). Navigation au clavier, libellés ARIA et focus visible.

## 🛠️ Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Motion · composants inspirés d'Aceternity UI · Lucide

## 📁 Structure

```
app/            # layout (métadonnées, polices), page d'accueil, styles globaux
components/     # sections : Hero, About, Projects, Skills, Experience, Contact, Footer
components/ui/  # effets réutilisables : faisceaux, texte, cartes, frise, fenêtre projet…
data/           # contenu : projets, parcours, compétences, infos du site
public/         # photo, CV, captures des projets
```

Tout le contenu se modifie dans `data/`, sans toucher aux composants.

## 🚀 Lancer en local

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de production
npm run lint
```

## 👤 Auteur

**Youssef Ounana** — Développeur Full-Stack & DevOps · [GitHub](https://github.com/Youssef-Ounana) · [LinkedIn](https://linkedin.com/in/youssef-ounana/)
