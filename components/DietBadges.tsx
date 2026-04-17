import type { DietTag } from "@/types/menu";

const TAG_META: Record<DietTag, { label: string; icon: string; color: string }> = {
  vegan: { label: "Vegan", icon: "🌱", color: "bg-green-900/40 text-green-300 border-green-700/50" },
  vejetaryen: { label: "Vejetaryen", icon: "🥬", color: "bg-emerald-900/40 text-emerald-300 border-emerald-700/50" },
  glutensiz: { label: "Glutensiz", icon: "🌾", color: "bg-amber-900/40 text-amber-300 border-amber-700/50" },
  acili: { label: "Acılı", icon: "🌶️", color: "bg-orange-900/40 text-orange-300 border-orange-700/50" },
  "cok-acili": { label: "Çok Acılı", icon: "🔥", color: "bg-red-900/40 text-red-300 border-red-700/50" },
  helal: { label: "Helal", icon: "☪︎", color: "bg-teal-900/40 text-teal-300 border-teal-700/50" },
};

type Props = {
  tags?: DietTag[];
  size?: "sm" | "md";
};

export default function DietBadges({ tags, size = "md" }: Props) {
  if (!tags || tags.length === 0) return null;
  const padding = size === "sm" ? "px-1.5 py-0.5 text-[10px]" : "px-2 py-1 text-xs";
  return (
    <div className="flex flex-wrap gap-1">
      {tags.map((tag) => {
        const meta = TAG_META[tag];
        return (
          <span
            key={tag}
            className={`inline-flex items-center gap-1 ${padding} rounded-full border ${meta.color}`}
            title={meta.label}
          >
            <span>{meta.icon}</span>
            {size === "md" && <span>{meta.label}</span>}
          </span>
        );
      })}
    </div>
  );
}
