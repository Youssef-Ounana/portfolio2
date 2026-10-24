"use client";
import { MotionConfig } from "motion/react";

// reducedMotion="user" : si le visiteur a activé « réduire les animations »
// dans son système, Motion désactive automatiquement les mouvements.
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
