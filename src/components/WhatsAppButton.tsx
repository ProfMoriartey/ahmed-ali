import { useTranslations } from "next-intl";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "~/lib/site";

export default function WhatsAppButton() {
  const t = useTranslations("Socials");

  // Opens a chat with a pre-filled greeting in the visitor's language
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t("whatsappMessage"))}`;

  return (
    <div className="group relative flex items-center justify-center">
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={t("whatsapp")}
        className="text-slate hover:text-slate-lightest focus-visible:text-slate-lightest flex h-6 w-6 items-center justify-center transition-colors duration-300"
      >
        <FaWhatsapp className="h-5 w-5" />
      </a>

      {/* Hover bubble, matching the email and phone buttons */}
      <div
        aria-hidden="true"
        className="bg-navy-light text-slate-lightest pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 translate-y-1 rounded px-3 py-1.5 text-xs font-medium whitespace-nowrap opacity-0 shadow-lg transition-all duration-200 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100"
      >
        {t("whatsapp")}
        <div className="bg-navy-light absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45"></div>
      </div>
    </div>
  );
}
