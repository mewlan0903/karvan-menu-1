"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { MenuItem } from "@/types/menu";
import DietBadges from "./DietBadges";
import { useLang } from "@/lib/LanguageContext";

type Props = {
  item: MenuItem | null;
  onClose: () => void;
};

export default function ItemModal({ item, onClose }: Props) {
  const { lang, t } = useLang();
  useEffect(() => {
    if (!item) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full md:max-w-lg bg-[#2a1810] border border-[#c9a55c]/30 rounded-2xl overflow-hidden max-h-[92vh] flex flex-col animate-modalPop"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center bg-black/60 hover:bg-black/80 text-white rounded-full text-lg backdrop-blur"
          aria-label={t("close")}
        >
          ✕
        </button>

        <div className="relative aspect-square w-full bg-[#1a0f08] shrink-0">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 100vw, 512px"
            className="object-contain"
            priority
          />
        </div>

        <div className="p-6 overflow-y-auto">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              {lang === "ug" && item.nameUg ? (
                <>
                  <h2 dir="rtl" lang="ug" style={{ fontFamily: "var(--font-uyghur)" }} className="text-3xl text-[#f5e6d3] leading-tight">
                    {item.nameUg}
                  </h2>
                  <p className="font-serif text-base text-[#c9a55c]/70 mt-1">{item.name}</p>
                </>
              ) : (
                <>
                  <h2 className="font-serif text-2xl text-[#f5e6d3] leading-tight">{item.name}</h2>
                  {item.nameUg && (
                    <p dir="rtl" lang="ug" style={{ fontFamily: "var(--font-uyghur)" }} className="text-lg text-[#c9a55c]/75 mt-1">
                      {item.nameUg}
                    </p>
                  )}
                </>
              )}
              {item.tags && item.tags.length > 0 && (
                <div className="mt-2">
                  <DietBadges tags={item.tags} />
                </div>
              )}
            </div>
            <span className="price-tag price-tag-lg whitespace-nowrap">
              ₺{item.price}
            </span>
          </div>

          <p className="mt-4 text-[#f5e6d3]/80 leading-relaxed">
            {item.longDescription ?? item.description}
          </p>

          {(item.prepTime || item.portion) && (
            <div className="mt-5 grid grid-cols-2 gap-3">
              {item.prepTime && (
                <div className="bg-[#1a0f08] border border-[#3d2817] rounded-lg p-3">
                  <div className="text-[10px] uppercase tracking-wider text-[#c9a55c]/70">
                    Hazırlanma
                  </div>
                  <div className="text-sm text-[#f5e6d3] mt-1">
                    ⏱ ~{item.prepTime} dk
                  </div>
                </div>
              )}
              {item.portion && (
                <div className="bg-[#1a0f08] border border-[#3d2817] rounded-lg p-3">
                  <div className="text-[10px] uppercase tracking-wider text-[#c9a55c]/70">
                    Porsiyon
                  </div>
                  <div className="text-sm text-[#f5e6d3] mt-1">
                    🍽 {item.portion}
                  </div>
                </div>
              )}
            </div>
          )}

          {item.ingredients && item.ingredients.length > 0 && (
            <div className="mt-5">
              <h4 className="text-xs uppercase tracking-wider text-[#c9a55c]/80 mb-2">
                Malzemeler
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.ingredients.map((ing) => (
                  <span
                    key={ing}
                    className="px-3 py-1 text-xs bg-[#1a0f08] border border-[#3d2817] rounded-full text-[#f5e6d3]/80"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {item.allergens && item.allergens.length > 0 && (
            <div className="mt-5 p-3 bg-amber-950/30 border border-amber-800/40 rounded-lg">
              <h4 className="text-xs uppercase tracking-wider text-amber-400/90 mb-2">
                ⚠ Alerjen Uyarısı
              </h4>
              <p className="text-xs text-amber-200/80">
                Bu ürün şunları içerir:{" "}
                <span className="font-medium">
                  {item.allergens.join(", ")}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
