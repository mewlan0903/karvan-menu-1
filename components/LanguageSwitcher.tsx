"use client";

import { useLang } from "@/lib/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div className="inline-flex items-center rounded-full border border-[#3d2817] bg-[#1a0f08]/70 backdrop-blur p-0.5">
      <button
        onClick={() => setLang("tr")}
        className={`px-3 py-1 text-xs rounded-full transition-colors ${
          lang === "tr"
            ? "bg-[#c9a55c] text-[#1a0f08] font-semibold"
            : "text-[#f5e6d3]/70 hover:text-[#c9a55c]"
        }`}
      >
        TR
      </button>
      <button
        onClick={() => setLang("ug")}
        className={`px-3 py-1 text-xs rounded-full transition-colors ${
          lang === "ug"
            ? "bg-[#c9a55c] text-[#1a0f08] font-semibold"
            : "text-[#f5e6d3]/70 hover:text-[#c9a55c]"
        }`}
      >
        UG
      </button>
    </div>
  );
}
