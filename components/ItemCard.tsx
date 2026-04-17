"use client";

import Image from "next/image";
import type { MenuItem } from "@/types/menu";
import DietBadges from "./DietBadges";
import { useLang } from "@/lib/LanguageContext";

type Props = {
  item: MenuItem;
  onClick: () => void;
  coverImage?: boolean;
};

export default function ItemCard({ item, onClick, coverImage }: Props) {
  const { lang, t } = useLang();
  const showUgPrimary = lang === "ug" && item.nameUg;

  return (
    <button
      onClick={onClick}
      className="group relative w-full text-left bg-[#2a1810] rounded-xl border border-[#3d2817] overflow-hidden hover:border-[#c9a55c]/60 hover:-translate-y-0.5 transition-all active:scale-[0.98] flex flex-col"
    >
      <div className="relative aspect-square overflow-hidden bg-[#1a0f08]">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className={`ken-burns transition-transform duration-700 group-hover:scale-110 ${
            coverImage ? "object-cover" : "object-contain"
          }`}
        />
        {item.tags && item.tags.length > 0 && (
          <div className="absolute top-2 left-2">
            <DietBadges tags={item.tags.slice(0, 2)} size="sm" />
          </div>
        )}
      </div>
      <span className="card-corners" />
      <div className="p-4 flex flex-col flex-1">
        {showUgPrimary ? (
          <>
            <h3 dir="rtl" lang="ug" style={{ fontFamily: "var(--font-uyghur)" }} className="text-xl text-[#f5e6d3] leading-tight">
              {item.nameUg}
            </h3>
            <p className="font-serif text-sm text-[#c9a55c]/70 mt-0.5">{item.name}</p>
          </>
        ) : (
          <>
            <h3 className="font-serif text-lg text-[#f5e6d3] leading-tight">{item.name}</h3>
            {item.nameUg && (
              <p dir="rtl" lang="ug" style={{ fontFamily: "var(--font-uyghur)" }} className="text-base text-[#c9a55c]/75 mt-0.5">
                {item.nameUg}
              </p>
            )}
          </>
        )}
        {item.description && (
          <p className="text-xs text-[#f5e6d3]/60 mt-1 line-clamp-2">
            {item.description}
          </p>
        )}
        <div className="mt-3 flex items-center justify-between">
          <span className="price-tag">₺{item.price}</span>
          <span
            className="text-xs text-[#f5e6d3]/40 group-hover:text-[#c9a55c] transition-colors"
            style={lang === "ug" ? { fontFamily: "var(--font-uyghur)" } : undefined}
          >
            {t("detail")} {lang === "ug" ? "←" : "→"}
          </span>
        </div>
      </div>
    </button>
  );
}
