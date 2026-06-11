"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "~/i18n/routing";
import { routing } from "~/i18n/routing";
import { type ChangeEvent, useTransition } from "react";
import { FiGlobe } from "react-icons/fi";

// Optional: Map locale codes to full display names
const localeNames: Record<string, string> = {
  en: "English",
  tr: "Türkçe",
  ar: "العربية",
  es: "Español",
  ru: "Pусский",
  // Add future languages here (e.g., es: "Español")
};

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      // router.replace keeps the user on the current page, just swapping the locale
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div className="text-slate hover:text-slate-lightest flex items-center gap-2 transition-colors duration-300">
      <FiGlobe className="h-5 w-5" />
      <div className="relative">
        <label htmlFor="language-switcher" className="sr-only">
          Change language
        </label>
        <select
          id="language-switcher"
          defaultValue={currentLocale}
          disabled={isPending}
          onChange={onSelectChange}
          className="cursor-pointer appearance-none bg-transparent py-1 pe-6 text-sm font-medium outline-none disabled:opacity-50"
        >
          {routing.locales.map((locale) => (
            <option
              key={locale}
              value={locale}
              className="bg-navy text-slate-lightest"
            >
              {localeNames[locale] || locale.toUpperCase()}
            </option>
          ))}
        </select>
        {/* Custom dropdown arrow to replace the native browser one */}
      </div>
    </div>
  );
}
