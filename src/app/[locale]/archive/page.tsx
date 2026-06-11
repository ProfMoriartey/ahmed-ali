import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "~/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Archive({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Initialize the translation hook for the Archive namespace
  const t = await getTranslations("Archive");

  // Moved inside the component to access translations dynamically
  const archiveData = [
    {
      year: "2026",
      title: t("projects.v5"),
      madeAt: t("labels.personal"),
      builtWith: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "https://ahmedalhusaini.com",
    },
    {
      year: "2026",
      title: t("projects.corporate"),
      madeAt: "Tuzemen Textile", // Proper nouns stay untranslated
      builtWith: ["Next.js", "TypeScript", "PostgresSQL"],
      link: "https://tuzemen-tekstil.vercel.app",
    },
    {
      year: "2026",
      title: t("projects.organization"),
      madeAt: "Hangflow ry",
      builtWith: ["Next.js", "Next-Intl", "Tailwind CSS"],
      link: "https://hangflow.org",
    },
    {
      year: "2025",
      title: t("projects.qr"),
      madeAt: t("labels.personal"),
      builtWith: ["Next.js", "Tailwind CSS", "Drizzle"],
      link: "https://code-cooker.vercel.app",
    },
    {
      year: "2025",
      title: t("projects.menu"),
      madeAt: "SAAS",
      builtWith: ["Next.js", "Clerk", "PostgresSQL"],
      link: "https://menu-pedia.com",
    },
    {
      year: "2025",
      title: t("projects.medical"),
      madeAt: t("labels.personal"),
      builtWith: ["Next.js", "OpenAI API", "Drizzle"],
      link: "https://hastory.vercel.app",
    },
    {
      year: "2025",
      title: t("projects.appointment"),
      madeAt: "Hayaz Goz Clinic",
      builtWith: ["Next.js", "Drizzle", "TypeScript"],
      link: "https://hayat-goz.vercel.app",
    },
    {
      year: "2024",
      title: t("projects.v4"),
      madeAt: t("labels.personal"),
      builtWith: ["React", "Tailwind CSS", "Framer Motion"],
      link: "https://ahmed-alhusaini.vercel.app",
    },
  ];

  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:py-24">
        {/* Header Section */}
        <Link
          href={`/${locale}`} // Ensures the back button keeps the user in their current language route
          className="group text-teal mb-2 inline-flex items-center leading-tight font-semibold transition-all"
        >
          <FiArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2" />
          {t("backButton")}
        </Link>
        <h1 className="text-slate-lightest text-4xl font-bold tracking-tight sm:text-5xl">
          {t("title")}
        </h1>

        {/* Archive Table */}
        <table className="mt-12 w-full border-collapse text-left">
          <thead className="border-slate-light/10 bg-navy/75 sticky top-0 z-10 border-b px-6 py-5 backdrop-blur">
            <tr>
              <th className="text-slate-lightest py-4 pr-8 text-sm font-semibold">
                {t("table.year")}
              </th>
              <th className="text-slate-lightest py-4 pr-8 text-sm font-semibold">
                {t("table.project")}
              </th>
              <th className="text-slate-lightest hidden py-4 pr-8 text-sm font-semibold lg:table-cell">
                {t("table.madeAt")}
              </th>
              <th className="text-slate-lightest hidden py-4 pr-8 text-sm font-semibold lg:table-cell">
                {t("table.builtWith")}
              </th>
              <th className="text-slate-lightest hidden py-4 pr-8 text-sm font-semibold sm:table-cell">
                {t("table.link")}
              </th>
            </tr>
          </thead>
          <tbody>
            {archiveData.map((project, index) => (
              <tr
                key={index}
                className="border-slate-light/10 hover:bg-navy-light/50 border-b transition-colors last:border-none"
              >
                <td className="text-teal py-4 pr-4 align-top text-sm">
                  <div className="translate-y-px">{project.year}</div>
                </td>
                <td className="text-slate-lightest py-4 pr-4 align-top leading-snug font-semibold">
                  <div className="block sm:hidden">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="hover:text-teal focus-visible:text-teal group/link text-slate-lightest inline-flex items-baseline text-base leading-tight font-medium sm:hidden"
                      >
                        {project.title}
                        <FiArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 motion-reduce:transition-none" />
                      </a>
                    ) : (
                      <span>{project.title}</span>
                    )}
                  </div>
                  <div className="hidden sm:block">{project.title}</div>
                </td>
                <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                  <div className="translate-y-px">{project.madeAt}</div>
                </td>
                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul className="flex -translate-y-1.5 flex-wrap">
                    {project.builtWith.map((tech) => (
                      <li
                        key={tech}
                        className="bg-teal/10 text-teal my-1 mr-1.5 flex items-center rounded-full px-3 py-1 text-xs leading-5 font-medium"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="hidden py-4 align-top sm:table-cell">
                  {project.link && (
                    <ul className="translate-y-1">
                      <li className="mb-1 flex items-center">
                        <a
                          className="group/link text-slate hover:text-teal focus-visible:text-teal inline-flex items-baseline text-sm leading-tight font-medium"
                          href={project.link}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <span className="truncate">
                            {project.link.replace(/^https?:\/\//, "")}
                          </span>
                          <FiArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 motion-reduce:transition-none" />
                        </a>
                      </li>
                    </ul>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
