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

      <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
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

        <ItemList
          title={t("educationTitle")}
          items={education}
          heading={heading}
        />
        <ItemList
          title={t("certificatesTitle")}
          items={certificates}
          heading={heading}
        />
      </div>
    </div>
  );
}

function ItemList({
  title,
  items,
  heading,
}: {
  title: string;
  items: Item[];
  heading: string;
}) {
  return (
    <div>
      <h5 className={heading}>{title}</h5>
      <ul className="space-y-2.5 text-sm leading-snug">
        {items.map((item) => (
          <li key={item.name}>
            <span className="text-slate-light block">{item.name}</span>
            <span className="text-slate text-xs">{item.detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
