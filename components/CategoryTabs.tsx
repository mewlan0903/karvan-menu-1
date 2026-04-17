"use client";

import { useEffect, useState } from "react";
import type { Category } from "@/types/menu";
import { useLang } from "@/lib/LanguageContext";
import CategoryIcon from "./CategoryIcon";
import LanguageSwitcher from "./LanguageSwitcher";

type Props = {
  categories: Category[];
};

export default function CategoryTabs({ categories }: Props) {
  const { lang } = useLang();
  const [active, setActive] = useState(categories[0]?.id);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    categories.forEach((cat) => {
      const el = document.getElementById(`cat-${cat.id}`);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(cat.id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [categories]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(`cat-${id}`);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-30 bg-[#1a0f08]/95 backdrop-blur border-b border-[#3d2817]">
      <div className="max-w-4xl mx-auto flex items-center gap-2 px-4">
        <div className="flex-1 overflow-x-auto no-scrollbar">
          <div className="flex gap-2 py-3 whitespace-nowrap">
            {categories.map((cat) => {
              const isActive = active === cat.id;
              const label = lang === "ug" && cat.nameUg ? cat.nameUg : cat.name;
              const count =
                (cat.items?.length ?? 0) +
                (cat.subgroups?.reduce((s, sg) => s + sg.items.length, 0) ?? 0);
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollTo(cat.id)}
                  dir={lang === "ug" ? "rtl" : "ltr"}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                    isActive
                      ? "bg-[#c9a55c] text-[#1a0f08] border-[#c9a55c]"
                      : "bg-transparent text-[#f5e6d3]/80 border-[#3d2817] hover:border-[#c9a55c]/50"
                  }`}
                >
                  <CategoryIcon id={cat.id} className="w-4 h-4" />
                  <span style={lang === "ug" ? { fontFamily: "var(--font-uyghur)" } : undefined}>
                    {label}
                  </span>
                  <span
                    className={`text-[10px] tabular-nums ${
                      isActive ? "text-[#1a0f08]/60" : "text-[#c9a55c]/60"
                    }`}
                  >
                    · {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="shrink-0">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
