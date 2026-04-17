"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "tr" | "ug";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof dict.tr) => string;
};

const dict = {
  tr: {
    menuLabel: "MENÜ",
    tagline: "Geleneksel Uygur Mutfağı",
    detail: "Detay",
    close: "Kapat",
    welcome: "Hoş Geldiniz",
    subtitle: "Uygur Mutfağı",
    footer: "Afiyet olsun",
    langTr: "Türkçe",
    langUg: "ئۇيغۇرچە",
  },
  ug: {
    menuLabel: "تىزىملىك",
    tagline: "ئەنئەنىۋى ئۇيغۇر تائاملىرى",
    detail: "تەپسىلات",
    close: "يېپىش",
    welcome: "خۇش كەپسىز",
    subtitle: "ئۇيغۇر تائاملىرى",
    footer: "خوش ياقسۇن",
    langTr: "Türkçe",
    langUg: "ئۇيغۇرچە",
  },
} as const;

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("tr");

  useEffect(() => {
    const stored = localStorage.getItem("karvan-lang");
    if (stored === "tr" || stored === "ug") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("karvan-lang", l);
  };

  const t = (key: keyof typeof dict.tr) => dict[lang][key];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
