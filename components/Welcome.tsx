"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function Welcome() {
  const { lang, t } = useLang();
  const [visible, setVisible] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const fadeTimer = setTimeout(() => setFadingOut(true), 2500);
    const removeTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 3000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#1a0f08] transition-opacity duration-500 ${
        fadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center animate-welcomeZoom"
        style={{ backgroundImage: "url('/images/uygur sofrası .png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border border-[#c9a55c]/20 rounded-full animate-welcomeFloat" />
        <div className="absolute bottom-20 right-10 w-20 h-20 border border-[#c9a55c]/15 rounded-full animate-welcomeFloat2" />
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-[#c9a55c]/40 rounded-full animate-welcomeSparkle" />
        <div className="absolute top-1/3 left-1/5 w-1 h-1 bg-[#c9a55c]/30 rounded-full animate-welcomeSparkle2" />
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-[#c9a55c]/35 rounded-full animate-welcomeSparkle" />
      </div>

      <div className="relative text-center px-4 max-w-full">
        <div className="animate-welcomeLineTop h-px w-0 mx-auto bg-gradient-to-r from-transparent via-[#c9a55c]/60 to-transparent mb-4 sm:mb-6" />
        <div className="animate-welcomeText">
          <h1
            className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-[#c9a55c] drop-shadow-[0_4px_30px_rgba(201,165,92,0.4)] animate-welcomeGlow tracking-[0.08em] sm:tracking-[0.12em] md:tracking-[0.15em] uppercase whitespace-nowrap"
            style={{ textShadow: '0 0 30px rgba(201,165,92,0.3), 0 0 60px rgba(201,165,92,0.15), 0 4px 20px rgba(0,0,0,0.8)' }}
          >
            ✦ Karvan ✦
          </h1>
          <div className="my-3 sm:my-4 flex items-center justify-center gap-2 sm:gap-3">
            <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-[#c9a55c]/60" />
            <span className="text-[#c9a55c]/80 text-xl sm:text-2xl">◆</span>
            <div className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-[#c9a55c]/60" />
          </div>
          <h2
            className="font-serif text-2xl sm:text-3xl md:text-5xl text-[#f5e6d3] drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
            dir={lang === "ug" ? "rtl" : "ltr"}
            style={lang === "ug" ? { fontFamily: "var(--font-uyghur)" } : undefined}
          >
            {t("welcome")}
          </h2>
          <p
            className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-[#f5e6d3]/80 tracking-[0.2em] sm:tracking-[0.3em] uppercase animate-welcomeSubtext"
            dir={lang === "ug" ? "rtl" : "ltr"}
            style={lang === "ug" ? { fontFamily: "var(--font-uyghur)", letterSpacing: "0.08em" } : undefined}
          >
            {t("subtitle")}
          </p>
        </div>
        <div className="animate-welcomeLineBottom h-px w-0 mx-auto bg-gradient-to-r from-transparent via-[#c9a55c]/60 to-transparent mt-4 sm:mt-6" />
      </div>
    </div>
  );
}
