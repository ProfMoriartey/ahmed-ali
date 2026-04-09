import "~/styles/globals.css";
// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import Spotlight from "~/components/Spotlight";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Ahmed Alhusaini | Software Engineer",
  description: "I turn ideas into useful digital experiences.",
  openGraph: {
    title: "Ahmed Alhusaini | Software Engineer",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${robotoMono.variable} font-sans antialiased`}
      >
        <Spotlight />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
