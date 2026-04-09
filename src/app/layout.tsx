import "~/styles/globals.css";
// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import Spotlight from "~/components/Spotlight";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Brittany Chiang Clone",
  description: "A portfolio recreation",
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
      </body>
    </html>
  );
}
