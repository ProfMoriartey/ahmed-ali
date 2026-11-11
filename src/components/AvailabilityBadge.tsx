import { useTranslations } from "next-intl";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "~/lib/site";

// Flip to false when you're not taking new work
export const IS_AVAILABLE = true;

export default function AvailabilityBadge() {
  const t = useTranslations("Home");

  if (!IS_AVAILABLE) return null;

  // Opens a WhatsApp chat with a pre-filled greeting in the visitor's language
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t("whatsappMessage"))}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${t("available")} — WhatsApp`}
      className="group/badge border-teal/30 bg-teal/10 text-teal hover:border-teal/60 hover:bg-teal/15 mt-5 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium transition-colors"
    >
      <span className="relative flex h-2 w-2">
        <span className="bg-teal absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 motion-reduce:animate-none" />
        <span className="bg-teal relative inline-flex h-2 w-2 rounded-full" />
      </span>
      {t("available")}
      <FaWhatsapp className="h-3.5 w-3.5 opacity-70 transition-opacity group-hover/badge:opacity-100" />
    </a>
  );
}
