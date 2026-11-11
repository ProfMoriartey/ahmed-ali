import "~/styles/globals.css";
// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import Spotlight from "~/components/Spotlight";
import { Analytics } from "@vercel/analytics/next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "~/i18n/routing";
import {
  altNameFor,
  ALTERNATE_NAMES,
  NAME,
  PROFILES,
  SITE_URL,
} from "~/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

const ogLocales: Record<string, string> = {
  en: "en_US",
  tr: "tr_TR",
  ar: "ar_AR",
  es: "es_ES",
  ru: "ru_RU",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });

  // The Turkish name is carried by the description, JSON-LD and visible text
  const title = `${t("name")} | ${t("title")}`;
  const description = `${t("name")} (${altNameFor(locale).name}) — ${t("title")}. ${t("description")}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    applicationName: NAME,
    authors: [{ name: NAME, url: SITE_URL }],
    keywords: [NAME, ...ALTERNATE_NAMES, t("title")],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ...Object.fromEntries(routing.locales.map((l) => [l, `/${l}`])),
        "x-default": `/${routing.defaultLocale}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}`,
      siteName: NAME,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
      locale: ogLocales[locale] ?? "en_US",
      type: "profile",
    },
  };
}

// Structured data: tells search engines both names belong to the same person
function PersonJsonLd({ jobTitle }: { jobTitle: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: NAME,
    alternateName: ALTERNATE_NAMES,
    url: SITE_URL,
    image: `${SITE_URL}/og-image.jpg`,
    jobTitle,
    sameAs: Object.values(PROFILES),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "Home" });

  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction} className="scroll-smooth">
      <body
        className={`${inter.variable} ${robotoMono.variable} font-sans antialiased`}
      >
        <PersonJsonLd jobTitle={t("title")} />
        <NextIntlClientProvider messages={messages}>
          <Spotlight />
          {children}

          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
