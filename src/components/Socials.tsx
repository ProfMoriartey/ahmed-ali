import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import LanguageSwitcher from "./LanguageSwitcher";
import EmailButton from "./EmailButton";
import PhoneButton from "./PhoneButton";
import { PROFILES } from "~/lib/site";

const socialLinks = [
  { name: "GitHub", href: PROFILES.github, icon: FiGithub },
  { name: "LinkedIn", href: PROFILES.linkedin, icon: FiLinkedin },
  { name: "Instagram", href: PROFILES.instagram, icon: FiInstagram },
];

export default function Socials() {
  return (
    <div className="mt-8 flex items-center gap-8">
      {/* Social Icons List */}
      <ul className="flex items-center gap-5" aria-label="Social media">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <li key={link.name}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-slate hover:text-slate-lightest block transition-colors duration-300"
                aria-label={`${link.name} (opens in a new tab)`}
              >
                <span className="sr-only">{link.name}</span>
                <Icon className="h-6 w-6" />
              </a>
            </li>
          );
        })}

        {/* Contact Buttons */}
        <li>
          <EmailButton />
        </li>
        <li>
          <PhoneButton />
        </li>
      </ul>

      {/* Decorative dot separator */}
      <div className="bg-slate-light/30 hidden h-1 w-1 rounded-full sm:block"></div>

      {/* Language Switcher */}
      <LanguageSwitcher />
    </div>
  );
}
