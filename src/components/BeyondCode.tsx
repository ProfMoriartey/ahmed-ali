import { useTranslations } from "next-intl";

type Language = { name: string; level: string };
type Item = { name: string; detail: string };

// Small "Beyond code" block shown inside "More about me":
// spoken languages, education and certificates
export default function BeyondCode() {
  const t = useTranslations("Home.about.beyond");
  const languages = t.raw("languages") as Language[];
  const education = t.raw("education") as Item[];
  const certificates = t.raw("certificates") as Item[];

  const heading =
    "text-slate-lightest mb-3 text-xs font-bold tracking-widest uppercase";

  return (
    <div className="border-slate/20 mt-2 border-t pt-6">
      <h4 className="text-slate-light mb-5 text-sm font-semibold">
        {t("title")}
      </h4>

      <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
        <div>
          <h5 className={heading}>{t("languagesTitle")}</h5>
          <ul className="space-y-1.5 text-sm">
            {languages.map((lang) => (
              <li key={lang.name} className="flex justify-between gap-3">
                <span className="text-slate-light">{lang.name}</span>
                <span className="text-slate text-xs leading-5">
                  {lang.level}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className={heading}>{t("educationTitle")}</h5>
          <ul className="space-y-2.5 text-sm leading-snug">
            {education.map((item) => (
              <li key={item.name}>
                <span className="text-slate-light block">{item.name}</span>
                <span className="text-slate text-xs">{item.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Full width under the two columns; pills wrap, so adding more is easy */}
      <div className="mt-8">
        <h5 className={heading}>{t("certificatesTitle")}</h5>
        <ul className="flex flex-wrap gap-2">
          {certificates.map((item) => (
            <li
              key={item.name}
              className="border-slate/25 rounded-full border px-3 py-1 text-xs"
            >
              <span className="text-slate-light">{item.name}</span>
              <span className="text-slate"> · {item.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
