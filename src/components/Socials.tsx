import {
  FiGithub,
  FiLinkedin,
  FiCodepen,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/ProfMoriartey/",
    icon: FiGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ahmed-alhusaini/",
    icon: FiLinkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ahmedalhusaini_/",
    icon: FiInstagram,
  },
];

export default function Socials() {
  return (
    <ul className="mt-8 flex items-center gap-5" aria-label="Social media">
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
    </ul>
  );
}
