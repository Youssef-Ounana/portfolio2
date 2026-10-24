"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import { TextReveal } from "./ui/TextReveal";
import { SectionHeading } from "./ui/SectionHeading";
import { site } from "@/data/site";

const facts = [
  { icon: GraduationCap, label: "Mastère Ingénierie Avancée du Logiciel — ISCOD (2026–2028)" },
  { icon: Briefcase, label: "Alternance : 4 jours en entreprise / 1 jour en formation" },
  { icon: MapPin, label: site.location },
];

const About = () => (
  <section id="a-propos" className="relative mx-auto max-w-6xl px-6 py-28">
    <SectionHeading eyebrow="À propos" title="Développeur" highlight="curieux et créatif" />

    <div className="grid items-center gap-14 md:grid-cols-[280px_1fr]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto w-56 md:w-full"
      >
        {/* Halo dégradé derrière la photo */}
        <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-40 blur-2xl" aria-hidden="true" />
        <Image
          src="/profile.webp"
          alt="Photo de Youssef Ounana"
          width={560}
          height={560}
          className="relative aspect-square rounded-[2rem] border border-white/10 object-cover"
        />
      </motion.div>

      <div>
        <TextReveal
          className="text-2xl font-medium leading-snug text-white md:text-3xl"
          text="Diplômé d'une licence en informatique, je construis des applications de bout en bout : des interfaces React animées jusqu'aux API, aux bases de données et au déploiement avec Docker. J'aime quand une interface est aussi agréable à utiliser qu'elle est solide techniquement."
        />
        <ul className="mt-10 space-y-3">
          {facts.map(({ icon: Icon, label }, i) => (
            <motion.li
              key={label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center gap-3 text-neutral-300"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                <Icon className="h-4 w-4 text-purple-300" aria-hidden="true" />
              </span>
              {label}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default About;
