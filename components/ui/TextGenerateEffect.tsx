"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

// Les mots apparaissent un par un, en passant du flou au net.
export const TextGenerateEffect = ({
  words,
  className,
  highlight = [],
  filter = true,
  duration = 0.5,
  ariaHidden = false,
}: {
  words: string;
  className?: string;
  /** index des mots à colorer (ex: [3, 4]) */
  highlight?: number[];
  filter?: boolean;
  duration?: number;
  /** true si le même texte existe déjà pour les lecteurs d'écran (ex: un <h1> masqué) */
  ariaHidden?: boolean;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      { opacity: 1, filter: filter ? "blur(0px)" : "none" },
      { duration, delay: stagger(0.15) }
    );
  }, [animate, duration, filter]);

  return (
    <div className={cn("font-bold", className)} aria-hidden={ariaHidden || undefined}>
      <motion.div ref={scope} className="my-4 leading-snug tracking-tight">
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className={cn(
              "opacity-0",
              highlight.includes(idx)
                ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                : "text-white"
            )}
            style={{ filter: filter ? "blur(10px)" : "none" }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
