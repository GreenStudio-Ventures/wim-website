"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type HeroTextCycleProps = {
  label: string;
  items: string[];
};

export function HeroTextCycle({ label, items }: HeroTextCycleProps) {
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion || items.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, 2400);

    return () => window.clearInterval(intervalId);
  }, [items.length, reducedMotion]);

  if (!items.length) {
    return null;
  }

  return (
    <div className="hero-text-cycle" aria-label={label}>
      <span className="hero-text-cycle-label">{label}</span>
      <span className="hero-text-cycle-window" aria-live="polite">
        {reducedMotion ? (
          <span className="hero-text-cycle-item">{items[0]}</span>
        ) : (
          <AnimatePresence mode="wait">
            <motion.span
              key={items[index]}
              className="hero-text-cycle-item"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {items[index]}
            </motion.span>
          </AnimatePresence>
        )}
      </span>
    </div>
  );
}
