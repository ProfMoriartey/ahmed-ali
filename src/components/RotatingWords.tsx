"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

interface RotatingWordsProps {
  words: string[];
  interval?: number; // ms each word stays on screen
}

export default function RotatingWords({
  words,
  interval = 2600,
}: RotatingWordsProps) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || words.length < 2) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      interval,
    );
    return () => clearInterval(id);
  }, [reduceMotion, words.length, interval]);

  return (
    // Hidden from screen readers; the full sentence is provided as sr-only text
    // Inline so it sits on the same line as the prefix; nowrap keeps a phrase
    // together if it has to move to the next line on narrow screens
    <span
      aria-hidden="true"
      className="relative inline-flex overflow-hidden align-bottom"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={index}
          className="text-teal inline-block font-medium whitespace-nowrap"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
