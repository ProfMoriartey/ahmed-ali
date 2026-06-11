import "~/styles/globals.css";
// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import Spotlight from "~/components/Spotlight";
import { Analytics } from "@vercel/analytics/next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "~/i18n/routing";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Ahmed Alhusaini | Software Developer",
  description: "I turn ideas into useful digital experiences.",
  openGraph: {
    title: "Ahmed Alhusaini | Software Developer",
    description: "I turn ideas into useful digital experiences.",
    url: "https://ahmedalhusaini.com",
    siteName: "Ahmed Alhusaini",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

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

  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction} className="scroll-smooth">
      <body
        className={`${inter.variable} ${robotoMono.variable} font-sans antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Spotlight />
          {children}

          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
