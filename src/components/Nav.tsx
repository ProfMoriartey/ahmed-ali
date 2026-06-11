"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function Nav() {
  const t = useTranslations("Nav");
  const [activeSection, setActiveSection] = useState("about");

  // Move the array inside the component to use the translation hook
  const navItems = [
    { name: t("about"), href: "#about" },
    { name: t("experience"), href: "#experience" },
    { name: t("projects"), href: "#projects" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="nav hidden lg:block">
      <ul className="mt-16 w-max">
        {navItems.map((item) => {
          // Compare without the '#' symbol
          const isActive = activeSection === item.href.substring(1);

          return (
            <li key={item.name}>
              <a
                href={item.href}
                className={`group flex items-center py-3 ${
                  isActive ? "text-slate-lightest" : "text-slate"
                }`}
              >
                <span
                  className={`me-4 h-px transition-all duration-300 motion-reduce:transition-none ${
                    isActive
                      ? "bg-slate-lightest w-16"
                      : "bg-slate group-hover:bg-slate-lightest w-8 group-hover:w-16"
                  }`}
                />
                <span
                  className={`group-hover:text-slate-lightest text-xs font-bold tracking-widest uppercase ${
                    isActive ? "text-slate-lightest" : "text-slate"
                  }`}
                >
                  {item.name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
