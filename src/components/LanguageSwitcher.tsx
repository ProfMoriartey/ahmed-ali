"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useLocale } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { FiCheck, FiChevronDown, FiGlobe } from "react-icons/fi";
import { routing, usePathname, useRouter } from "~/i18n/routing";

// Each language's name written in that language
const localeNames: Record<string, string> = {
  en: "English",
  tr: "Türkçe",
  ar: "العربية",
  es: "Español",
  ru: "Русский",
};

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close on outside click / tap and on Escape
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent | TouchEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const choose = (locale: string) => {
    setOpen(false);
    if (locale === currentLocale) return;
    startTransition(() => {
      // Keeps the visitor on the same page, just swapping the locale
      router.replace(pathname, { locale });
    });
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        disabled={isPending}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="Change language"
        className={`group flex items-center gap-2 text-sm font-medium transition-colors duration-300 disabled:opacity-50 ${
          open ? "text-slate-lightest" : "text-slate hover:text-slate-lightest"
        }`}
      >
        <FiGlobe className="h-5 w-5" />
        <span>{localeNames[currentLocale] ?? currentLocale.toUpperCase()}</span>
        <FiChevronDown
          className={`h-4 w-4 transition-transform duration-300 motion-reduce:transition-none ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            // Opens upward: on desktop the switcher sits at the bottom of the screen
            className="bg-navy-light/95 border-slate/15 absolute start-0 bottom-full z-40 mb-3 min-w-44 origin-bottom overflow-hidden rounded-lg border p-1 shadow-xl shadow-black/30 backdrop-blur"
          >
            {routing.locales.map((locale) => {
              const active = locale === currentLocale;
              return (
                <li key={locale}>
                  <button
                    type="button"
                    lang={locale}
                    onClick={() => choose(locale)}
                    aria-current={active ? "true" : undefined}
                    className={`flex w-full items-center justify-between gap-4 rounded-md px-3 py-2 text-start text-sm transition-colors ${
                      active
                        ? "text-teal bg-teal/10"
                        : "text-slate-light hover:bg-navy-lightest/60 hover:text-slate-lightest focus-visible:bg-navy-lightest/60"
                    }`}
                  >
                    <span>{localeNames[locale] ?? locale.toUpperCase()}</span>
                    <span className="flex items-center gap-2">
                      <span className="text-slate font-mono text-[10px] tracking-wider uppercase">
                        {locale}
                      </span>
                      <FiCheck
                        className={`h-3.5 w-3.5 ${active ? "opacity-100" : "opacity-0"}`}
                      />
                    </span>
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
