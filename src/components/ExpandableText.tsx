"use client";

import { useId, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

interface ExpandableTextProps {
  children: ReactNode;
  moreLabel: string;
  lessLabel: string;
}

export default function ExpandableText({
  children,
  moreLabel,
  lessLabel,
}: ExpandableTextProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-4 pb-6">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="text-slate-lightest hover:text-teal focus-visible:text-teal group inline-flex items-center gap-1 text-sm font-semibold transition-colors"
      >
        {open ? lessLabel : moreLabel}
        <FiChevronDown
          className={`h-4 w-4 transition-transform duration-300 motion-reduce:transition-none ${
            open ? "rotate-180" : "group-hover:translate-y-0.5"
          }`}
        />
      </button>
    </div>
  );
}
