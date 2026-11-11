// Single source of truth for identity + SEO details

// Must match the primary domain in Vercel (www)
export const SITE_URL = "https://www.ahmedalhusaini.com";

// WhatsApp number in international format, digits only (no 00 / +)
export const WHATSAPP_NUMBER = "905406987368";

// Primary (Latin) name — matches the domain
export const NAME = "Ahmed Alhusaini";

// Turkish name, shown under the main name and given to search engines
export const ALT_NAME = "Ahmed Hüseyinoğlu";
export const ALT_NAME_AR = "أحمد حسين اولو";

// The secondary name shown under the heading (and in the meta description)
// for a given locale. The Turkish page leads with the Turkish name (set in
// messages/tr.json → Home.name), so its secondary name is the main one.
export function altNameFor(locale: string) {
  if (locale === "tr") return { name: NAME, lang: undefined };
  if (locale === "ar") return { name: ALT_NAME_AR, lang: "ar" };
  return { name: ALT_NAME, lang: "tr" };
}

// Every spelling people might search for. Includes the version without
// Turkish characters, since many people type it that way.
export const ALTERNATE_NAMES = [
  ALT_NAME,
  "Ahmed Huseyinoglu",
  ALT_NAME_AR,
  "أحمد الحسيني", // Arabic spelling of the main name
  "Ахмед Альхусайни",
];

export const PROFILES = {
  github: "https://github.com/ProfMoriartey/",
  linkedin: "https://www.linkedin.com/in/ahmed-alhusaini/",
  instagram: "https://www.instagram.com/ahmedalhusaini_/",
};
