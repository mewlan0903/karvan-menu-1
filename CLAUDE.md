# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

> **Next.js 16.2.3** — see `AGENTS.md`. Before writing Next-specific code, consult `node_modules/next/dist/docs/` rather than relying on memory; App Router, `next/image`, and font/metadata APIs have breaking changes from earlier versions.

## Commands

```bash
npm run dev      # start local dev server on http://localhost:3000
npm run build    # production build (also the only linter/type gate — there is no `lint` or `test` script)
npm run start    # serve the built app
```

No test runner, no ESLint script, no CI config. Type-check is whatever `next build` does via `tsconfig.json` (`strict: true`, path alias `@/*`).

## Architecture

Single-page, statically-rendered restaurant menu. Everything flows from one JSON file → one page.

- **Data source**: `data/menu.json` is imported at build time in [app/page.tsx](app/page.tsx) and cast to the `Menu` type. There is no API, no DB, no CMS. Editing the menu = editing this file.
- **Type shape** ([types/menu.ts](types/menu.ts)): `Menu → Category[] → (Subgroup[] | MenuItem[]) → MenuItem`. A category may use either flat `items` **or** `subgroups` (with their own items) — [components/MenuView.tsx](components/MenuView.tsx) branches on `cat.subgroups?.length`. Don't mix both on one category.
- **Bilingual (TR / UG)**: every user-visible field has an optional `*Ug` twin (Uyghur, Arabic script, RTL). [lib/LanguageContext.tsx](lib/LanguageContext.tsx) holds the active `lang` (persisted to `localStorage` as `karvan-lang`) and a tiny static `dict` for chrome strings. Menu content is **not** in the dict — it's read field-by-field from `menu.json` with the `lang === "ug" ? x.nameUg : x.name` pattern. When rendering Uyghur, set `dir="rtl"` and `style={{ fontFamily: "var(--font-uyghur)" }}` (Amiri font, loaded in [app/layout.tsx](app/layout.tsx)).
- **Images**: flat layout under `public/images/`. `MenuItem.image` is the bare filename (e.g. `"Samsa.png"`) and is joined to `/images/` at the component layer. AVIF/WebP are emitted automatically by `next/image` (see [next.config.ts](next.config.ts)). **Gotcha**: if you replace an image in place (same filename), Next caches the optimized output — delete `.next/cache/images/` or rename the file, otherwise the old image keeps showing.
- **Styling**: Tailwind v4 via `@tailwindcss/postcss` (no `tailwind.config.*` — configure in `app/globals.css`). Design tokens live in CSS: background `#1a0f08`, text `#f5e6d3`, gold accent `#c9a55c`. Custom utilities referenced across components: `bg-texture`, `gold-shine`, `divider-ornament`, `line-expand`, `animate-fadeInUp`.
- **Client/server split**: `app/page.tsx` and `app/layout.tsx` are server components (static import of JSON, font loading, metadata). Anything with state or `localStorage` (`MenuView`, `ItemModal`, `LanguageContext`, `BackToTop`, `ScrollProgress`, `LanguageSwitcher`) is `"use client"`.

## Editing the menu

Add/modify categories and items in `data/menu.json`. Each `MenuItem` needs `id`, `name`, `description`, `price`, `image`; `nameUg` and other `*Ug` fields are optional but expected for full bilingual coverage. The corresponding image file must exist in `public/images/` with the exact filename stored in `image`.
