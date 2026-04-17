# Karvan Uygur Mutfağı — Dijital Menü

Restoran için QR kod tabanlı dijital menü uygulaması. Müşteri masaya oturup QR kodu taradığında bu menü açılır; kategorilere göre yemekleri inceleyebilir, detaylarını görebilir ve garsona sipariş verir.

## Teknoloji

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**

## Geliştirme

```bash
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini aç.

## Yapı

```
app/          Sayfa ve layout (tek sayfa)
components/   CategoryTabs, ItemCard, ItemModal, MenuView
data/         menu.json — kategoriler ve ürünler
public/       Yemek görselleri
types/        TypeScript tipleri
```

## Menüyü Düzenleme

Menü içeriği `data/menu.json` dosyasındadır. Yeni kategori veya ürün eklemek için bu dosyayı düzenle.
