"use client";

import { useState, useEffect, useRef } from "react";
import { FiMail, FiCopy, FiCheck } from "react-icons/fi";
import { useTranslations } from "next-intl";

export default function EmailButton() {
  const t = useTranslations("Socials");
  const [copied, setCopied] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const email = t("email");

  useEffect(() => {
    // Closes the mobile tooltip if the user taps anywhere else on the screen
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsTooltipOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    // On mobile: First tap opens the tooltip, stops the click from copying
    if (isTouchDevice && !isTooltipOpen) {
      e.preventDefault();
      setIsTooltipOpen(true);
      return;
    }

    // On desktop (or second tap on mobile): Copy to clipboard
    navigator.clipboard.writeText(email);
    setCopied(true);

    // Reset the success state after 2 seconds
    setTimeout(() => {
      setCopied(false);
      setIsTooltipOpen(false);
    }, 2000);
  };

  return (
    <div className="relative flex items-center justify-center">
      <button
        ref={buttonRef}
        onClick={handleClick}
        onMouseEnter={() =>
          !window.matchMedia("(pointer: coarse)").matches &&
          setIsTooltipOpen(true)
        }
        onMouseLeave={() =>
          !window.matchMedia("(pointer: coarse)").matches &&
          setIsTooltipOpen(false)
        }
        className="text-slate hover:text-slate-lightest flex h-6 w-6 items-center justify-center transition-colors duration-300"
        aria-label={t("copyEmail")}
      >
        {copied ? (
          <FiCheck className="text-teal h-5 w-5" />
        ) : isTooltipOpen ? (
          <FiCopy className="h-5 w-5" />
        ) : (
          <FiMail className="h-5 w-5" />
        )}
      </button>

      {/* Hover/Tap Bubble */}
      <div
        className={`bg-navy-light text-slate-lightest pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 rounded px-3 py-1.5 text-xs font-medium whitespace-nowrap shadow-lg transition-all duration-200 ${
          isTooltipOpen || copied
            ? "translate-y-0 opacity-100"
            : "translate-y-1 opacity-0"
        }`}
      >
        {copied ? t("copied") : email}
        {/* Downward pointing arrow */}
        <div className="bg-navy-light absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45"></div>
      </div>
    </div>
  );
}
