import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Amiri } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-uyghur",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Karvan Uygur Mutfağı — Menü",
  description: "Geleneksel Uygur mutfağı dijital menüsü. İpek Yolu lezzetleri, el açması Lağman, Uygur Polosu ve daha fazlası.",
  keywords: ["uygur mutfağı", "menü", "lağman", "polo", "karvan", "restoran"],
  openGraph: {
    title: "Karvan Uygur Mutfağı",
    description: "Geleneksel Uygur mutfağı dijital menüsü",
    type: "website",
    locale: "tr_TR",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#1a0f08",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`h-full antialiased ${playfair.variable} ${inter.variable} ${amiri.variable}`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#1a0f08] text-[#f5e6d3] selection:bg-[#c9a55c]/30 selection:text-[#f5e6d3] bg-texture"
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
