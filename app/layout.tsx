import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const title = "Youssef Ounana — Développeur Full-Stack & DevOps";
const description =
  "Portfolio créatif de Youssef Ounana : projets, parcours et compétences. En recherche d'alternance en développement, DevOps ou cybersécurité.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Youssef Ounana" }],
  openGraph: { title, description, type: "website", locale: "fr_FR" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // "dark" active les variantes dark: des composants Aceternity
    <html lang="fr" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
