"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = { name: string; link: string; icon?: React.ReactNode };

// Barre flottante : visible en haut de page, se cache quand on descend,
// réapparaît dès qu'on remonte.
export const FloatingNav = ({
  navItems,
  ctaHref,
  className,
}: {
  navItems: NavItem[];
  ctaHref: string;
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    const previous = scrollYProgress.getPrevious() ?? 0;
    if (current < 0.05) setVisible(true);
    else setVisible(current < previous);
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        aria-label="Navigation principale"
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed inset-x-0 top-6 z-[5000] mx-auto flex max-w-fit items-center justify-center gap-1 rounded-full border border-white/[0.15] bg-black/70 py-2 pl-4 pr-2 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-md sm:gap-2 sm:pl-6",
          className
        )}
      >
        {navItems.map((item) => (
          <a
            key={item.link}
            href={item.link}
            aria-label={item.name}
            className="flex items-center rounded-full px-2 py-1.5 text-neutral-300 transition hover:text-white sm:px-3"
          >
            <span className="block sm:hidden" aria-hidden="true">{item.icon}</span>
            <span className="hidden text-sm sm:block">{item.name}</span>
          </a>
        ))}
        <a
          href={ctaHref}
          className="relative ml-1 flex items-center gap-2 rounded-full border border-white/[0.2] px-4 py-2 text-sm font-medium text-white transition hover:bg-white/5"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          <span>Contact</span>
          <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </a>
      </motion.nav>
    </AnimatePresence>
  );
};
