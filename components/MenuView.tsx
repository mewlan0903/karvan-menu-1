"use client";

import { useState } from "react";
import type { Menu, MenuItem } from "@/types/menu";
import CategoryTabs from "./CategoryTabs";
import ItemCard from "./ItemCard";
import ItemModal from "./ItemModal";
import CategoryIcon from "./CategoryIcon";
import { useLang } from "@/lib/LanguageContext";

type Props = {
  menu: Menu;
};

export default function MenuView({ menu }: Props) {
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const { lang, t } = useLang();

  return (
    <>
      <header className="relative py-14 md:py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_#3d2817_0%,_transparent_60%)] opacity-50" />
        <div className="animate-fadeInUp">
          <div className="divider-ornament mb-4">◆ {t("menuLabel")} ◆</div>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight gold-shine">
            {lang === "ug" && menu.restaurantNameUg ? (
              <span style={{ fontFamily: "var(--font-uyghur)" }} dir="rtl" lang="ug">
                {menu.restaurantNameUg}
              </span>
            ) : (
              menu.restaurantName
            )}
          </h1>
          {lang === "tr" && menu.restaurantNameUg && (
            <p dir="rtl" lang="ug" style={{ fontFamily: "var(--font-uyghur)" }} className="text-lg md:text-xl text-[#c9a55c]/60 mt-2">
              {menu.restaurantNameUg}
            </p>
          )}
          <p
            className="text-xs md:text-sm text-[#f5e6d3]/50 mt-3 tracking-[0.25em] uppercase"
            dir={lang === "ug" ? "rtl" : "ltr"}
            style={lang === "ug" ? { fontFamily: "var(--font-uyghur)" } : undefined}
          >
            {t("tagline")}
          </p>
        </div>
      </header>

      <CategoryTabs categories={menu.categories} />

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-16">
        {menu.categories.map((cat, ci) => (
          <section
            key={cat.id}
            id={`cat-${cat.id}`}
            className="scroll-mt-20 animate-fadeInUp"
            style={{ animationDelay: `${ci * 60}ms` }}
          >
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <span className="text-[#c9a55c]">
                  <CategoryIcon id={cat.id} className="w-6 h-6" />
                </span>
                <h2
                  className="font-serif text-2xl md:text-3xl text-[#f5e6d3]"
                  dir={lang === "ug" ? "rtl" : "ltr"}
                  style={lang === "ug" ? { fontFamily: "var(--font-uyghur)" } : undefined}
                >
                  {lang === "ug" && cat.nameUg ? cat.nameUg : cat.name}
                </h2>
                <div className="flex-1 h-px bg-gradient-to-r from-[#c9a55c]/50 via-[#3d2817] to-transparent ml-2 line-expand" />
              </div>
              {(lang === "ug" ? cat.descriptionUg : cat.description) && (
                <p
                  className="mt-2 ml-9 text-sm text-[#f5e6d3]/55 italic"
                  dir={lang === "ug" ? "rtl" : "ltr"}
                  style={lang === "ug" ? { fontFamily: "var(--font-uyghur)", fontStyle: "normal" } : undefined}
                >
                  {lang === "ug" ? cat.descriptionUg : cat.description}
                </p>
              )}
            </div>
            {cat.subgroups && cat.subgroups.length > 0 ? (
              <div className="space-y-10">
                {cat.subgroups.map((sg) => (
                  <div key={sg.id}>
                    <div className="mb-4 pl-1">
                      <h3
                        className="font-serif text-lg md:text-xl text-[#c9a55c]"
                        dir={lang === "ug" ? "rtl" : "ltr"}
                        style={lang === "ug" ? { fontFamily: "var(--font-uyghur)" } : undefined}
                      >
                        {lang === "ug" && sg.nameUg ? sg.nameUg : sg.name}
                      </h3>
                      {lang === "tr" && sg.nameUg && (
                        <p dir="rtl" lang="ug" style={{ fontFamily: "var(--font-uyghur)" }} className="text-sm md:text-base text-[#f5e6d3]/50 mt-1">
                          {sg.nameUg}
                        </p>
                      )}
                      <div className="h-px bg-gradient-to-r from-[#c9a55c]/40 via-[#3d2817] to-transparent mt-2 line-expand" />
                    </div>
                    {sg.items.length > 0 && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {sg.items.map((item, ii) => (
                          <div
                            key={item.id}
                            className="animate-fadeInUp"
                            style={{ animationDelay: `${ii * 40}ms` }}
                          >
                            <ItemCard item={item} onClick={() => setSelected(item)} />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {cat.items.map((item, ii) => (
                  <div
                    key={item.id}
                    className="animate-fadeInUp"
                    style={{ animationDelay: `${ci * 60 + ii * 40}ms` }}
                  >
                    <ItemCard item={item} onClick={() => setSelected(item)} coverImage={cat.id === "icecekler"} />
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      <footer className="py-12 text-center">
        <div className="divider-ornament mb-3">◆</div>
        <p
          className="text-xs text-[#f5e6d3]/40 tracking-wider"
          style={lang === "ug" ? { fontFamily: "var(--font-uyghur)" } : undefined}
        >
          {t("footer")} · {lang === "ug" && menu.restaurantNameUg ? menu.restaurantNameUg : menu.restaurantName}
        </p>
        <p className="mt-6 text-[11px] text-[#f5e6d3]/35 tracking-wider">
          Tasarım ve frontend — Mevlan İmam ·{" "}
          <a
            href="https://api.whatsapp.com/send/?phone=905533333811&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c9a55c]/70 hover:text-[#c9a55c] underline decoration-[#c9a55c]/30 underline-offset-2 transition-colors"
          >
            İletişim
          </a>
        </p>
      </footer>

      <ItemModal item={selected} onClose={() => setSelected(null)} />
    </>
  );
}
