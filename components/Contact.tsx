"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Mail, Copy, Check, Github, Linkedin } from "lucide-react";
import MyButton from "./ui/MyButton";
import { site, mailto } from "@/data/site";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Presse-papiers indisponible (navigateur ancien) : le bouton mailto reste disponible
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32">
      {/* Halo de fond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-purple-300/80">Contact</p>
        <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
          Un projet, une alternance ?{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Parlons-en.
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-400">
          Je recherche une alternance en développement, DevOps ou cybersécurité. Écrivez-moi, je réponds rapidement.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <MyButton href={mailto} title="M'envoyer un email" icon={<Mail className="h-4 w-4" aria-hidden="true" />} />
          <MyButton
            onClick={copyEmail}
            variant="ghost"
            title={copied ? "Adresse copiée !" : site.email}
            icon={
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? "ok" : "copy"}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                </motion.span>
              </AnimatePresence>
            }
          />
        </div>
        <p className="sr-only" aria-live="polite">{copied ? "Adresse email copiée" : ""}</p>

        <div className="mt-10 flex justify-center gap-4">
          <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="rounded-full border border-white/10 p-3 text-neutral-400 transition hover:border-white/30 hover:text-white">
            <Github className="h-5 w-5" />
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="rounded-full border border-white/10 p-3 text-neutral-400 transition hover:border-white/30 hover:text-white">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
