# AhsaTech Design System

**Sürüm:** 1.0 · **Durum:** Uygulama rehberi · **Dil:** Türkçe

Bu belge AhsaTech kamuya açık web sitesinin görsel kararları için tek kaynaktır. AhsaTech; gömülü sistemler, PCB, endüstriyel IoT, otomasyon, kurumsal yazılım, bulut, yapay zekâ ve donanım-yazılım entegrasyonunda çalışan bir mühendislik firmasıdır. Arayüz; engineering, precision, reliability, technical depth ve sakin kurumsal güven vermelidir. Sonuç dekore edilmiş bir teknoloji sitesi değil, gerçek mühendislik firması görünümüdür.

## Mevcut mimari ve gözlemler

- Uygulama Next.js 16 App Router, React 19 ve Payload CMS 3.90 üzerinde çalışır. Kamuya açık route'lar `src/app/(frontend)` altında, Payload yönetimi `src/app/(payload)` altında bulunur.
- `src/app/(frontend)/layout.tsx` ortak Header, Footer, SEO JSON-LD ve `styles.css`/`engineering.css` katmanlarını yükler. `engineering.css` mevcut sunum token'larının ana kaynağıdır.
- İçerik blokları `src/components/Blocks/RenderBlocks.tsx` üzerinden Hero, Telemetry, Competencies, Featured Projects, Synergy, Trust Metrics, Mini Contact ve Rich Text bileşenlerine yönlendirilir. CMS içerikleri ile fallback bileşenleri aynı token ve layout kurallarını kullanır.
- Projeler `src/components/Projects`, ürünler `src/components/Products`, iletişim ve teklif akışları kendi alan bileşenlerini kullanır. `ProjectsPortfolioClient` kategori filtrelerini korur.
- Güçlü kararlar: koyu teknik yeşil ve turkuazın kurumsal kullanımı, belirgin hiyerarşi, border-first yüzeyler, teknik içerik dili, responsive grid için `minmax(0, 1fr)` yaklaşımı.
- Dikkat edilmesi gerekenler: kartların dar kolonlara düşmesi, inline grid stillerinin CSS ile çakışması, aynı sayfada rastgele breakpoint/token eklenmesi ve her içeriğin rounded card'a çevrilmesi. Yeni kod bu sorunları çoğaltmamalıdır.

## Marka renkleri

Renkler eşit ağırlıkta kullanılmaz. Ana kimlik `#002F35`, `#01A487` ve `#043AB9` etrafındadır.

| Token | Hex | Kullanım |
|---|---|---|
| `--color-brand-dark` | `#002F35` | Brand Dark, dark surface, header/telemetry zemini |
| `--color-brand-primary` | `#01A487` | Primary CTA, başarı, seçili durum |
| `--color-brand-blue` | `#043AB9` | Secondary CTA, bağlantılar, teknik vurgu |
| `--color-brand-light-blue` | `#4AAEEC` | Bilgi, grafik ve ikincil sinyal |
| `--color-brand-pcb` | `#77AC71` | Kontrollü PCB/ürün vurgusu |
| `--color-brand-neutral` | `#C5C9CA` | Teknik nötr, güçlü border ve pasif yüzey |
| `--color-brand-deep-green` | `#064C35` | Primary hover ve koyu başarı yüzeyi |
| `--color-brand-muted-green` | `#558458` | Yardımcı mühendislik vurgusu |
| `--color-brand-soft-blue` | `#6090E9` | Grafik/hover varyantı |
| `--color-brand-cyan` | `#32E8FC` | Yalnızca technical signal, küçük vurgu |
| `--color-brand-pale-blue` | `#C4DFF4` | Açık bilgi yüzeyi |
| `--color-graphite` | `#737E84` | Muted text ve yardımcı ikon |
| `--color-text` | `#163439` | Primary text |
| `--color-muted` | `#52656A` | Secondary text |
| `--color-border` | `#D5DFDD` | Border/separator |
| `--color-surface` | `#FFFFFF` | Card ve ana yüzey |
| `--color-surface-subtle` | `#F6F8F7` | Section background |
| `--color-error` | `#B42318` | Form hata durumu |
| `--color-warning` | `#B54708` | Uyarı durumu |

Önerilen görsel oran: %50–60 beyaz/nötr yüzey, %20–25 `#002F35`, %10–15 `#01A487`, %5–10 `#043AB9`, %5'ten az cyan/light blue/PCB vurgusu. Bu oranlar rehberdir; `#32E8FC` neon yüzey veya glow olarak kullanılmaz.

### CSS token sözleşmesi

```css
:root {
  --container-max: 1360px;
  --container-padding: clamp(1rem, 4vw, 2.5rem);
  --section-space-xl: clamp(5rem, 9vw, 8rem);
  --section-space-lg: clamp(4rem, 7vw, 6rem);
  --section-space-md: clamp(2.5rem, 5vw, 4rem);
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-6: 24px; --space-8: 32px; --space-12: 48px; --space-16: 64px;
  --space-20: 80px; --space-24: 96px; --space-30: 120px;
  --radius-sm: 2px; --radius-md: 4px; --radius-lg: 8px;
  --shadow-xs: 0 1px 2px rgba(0,47,53,.06);
  --shadow-sm: 0 4px 12px rgba(0,47,53,.08);
  --shadow-md: 0 8px 24px rgba(0,47,53,.10);
  --transition-fast: 150ms ease; --transition-normal: 240ms ease;
  --header-height: 76px;
}
```

Mevcut projede `--color-brand-green`, `--color-primary` gibi legacy alias'lar vardır; yeni bileşenler önce yukarıdaki anlam token'larını tercih eder. Aynı amaca yeni, isimsiz hex değer eklenmez.

## Typography

Fontlar Türkçe karakter destekli mevcut ailelerden gelir: metin için **Plus Jakarta Sans**, display ve teknik başlık için **Space Grotesk**. Fallback: `system-ui, sans-serif`.

| Stil | Boyut / line-height | Weight | Letter spacing |
|---|---|---:|---:|
| Display | `clamp(2.25rem, 3.8vw, 3.7rem)` / 1.16 | 600 | -0.045em |
| H1 | `clamp(2rem, 3.6vw, 3.5rem)` / 1.18 | 600–700 | -0.035em |
| H2 | `clamp(1.75rem, 2.6vw, 2.6rem)` / 1.22 | 600 | -0.035em |
| H3 | `clamp(1.15rem, 1.65vw, 1.5rem)` / 1.3 | 600 | -0.025em |
| H4 | `1.125rem` / 1.35 | 600 | -0.015em |
| Body large | `1.125rem` / 1.65 | 400 | 0 |
| Body | `1rem` / 1.6 | 400 | 0 |
| Small | `.875rem` / 1.5 | 500 | 0 |
| Caption | `.75rem` / 1.4 | 500 | .04em |
| Technical label | `.6875rem` / 1.3 | 700 | .12em, uppercase |

Başlıklar `text-wrap: balance`, paragraflar `text-wrap: pretty` kullanabilir. Hero başlığı okunabilir kalır; tek satır uğruna devasa font kullanılmaz.

## Spacing, container ve breakpoint

Temel ölçek 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 120 px'tir. Component padding 16–32 px, grid gap 24–32 px, form gap 16–24 px, section aralığı 64–120 px aralığında kalır. Header iç boşlukları 16–24 px'tir.

Tek container: `width: min(100% - 2 * var(--container-padding), var(--container-max)); margin-inline: auto`. 1440 ve 1920 viewport'ta içerik en fazla 1360 px; 1280'de kenar boşlukları korunur; 1024 ve 768'de tablet padding'i 24 px; 430, 390 ve 375'te 16 px kullanılır. Hiçbir bölüm fixed width, `min-content` veya sağda anlamsız boşluk üretemez.

| Ad | Aralık | Kural |
|---|---|---|
| mobile | `<640px` | tek kolon, 16 px padding, 44 px minimum touch target |
| small tablet | `640–899px` | çoğunlukla 2 kolon, 24 px padding |
| tablet | `900–1199px` | 2–3 kolon, 24–32 px padding |
| desktop | `1200–1599px` | 3 kolon, 32 px padding |
| large desktop | `>=1600px` | max container, 3 kolon; daha fazla boşluk |

Bu breakpoint'ler dışında tek seferlik media query eklenmez. Listing grid'leri `repeat(3, minmax(0, 1fr))`, tablet `repeat(2, minmax(0, 1fr))`, mobile `minmax(0, 1fr)` veya kontrollü `repeat(auto-fit, minmax(280px, 1fr))` kullanır. `repeat(n, auto)`, `min-content` ve yatay scroll yasaktır.

## Radius, shadow ve motion

`2px` küçük radius teknik etiket ve input, `4px` orta radius button/card, `8px` büyük radius media veya modal içindir. Her şeyi 24–32 px rounded yapmak yasaktır. Arayüz border-first, shadow-second yaklaşımındadır; gölgeler yalnızca katman ve odak ayrımı için `xs/sm/md` seviyelerinde kullanılır.

`150ms` hızlı, `240ms` normal, en fazla `400ms` yavaş geçiş kullanılır. İzin verilen hareketler opacity, 2–8 px translate, underline, küçük image reveal ve telemetry sinyalidir. Endless floating, büyük parallax, bounce, mouse-follow ve rotating gradient kullanılmaz. `prefers-reduced-motion: reduce` tüm geçişleri minimuma indirir.

## Buttons, header ve icons

- **Primary:** `#01A487` zemin, koyu metin veya beyaz kontrast, 48 px yükseklik, 16–24 px yatay padding; “Teklif Al” ana CTA'dır.
- **Secondary:** şeffaf/açık yüzey, `#043AB9` border ve metin.
- **Ghost/text:** border'sız, görünür hover underline veya yüzey; bilgi hiyerarşisini bozmamalı.
- **Icon button:** 44×44 px minimum hedef, anlamlı `aria-label`.
- Hover, active, visible focus ve disabled durumları her butonda tanımlıdır; focus outline kaldırılmaz.

Desktop header logo, ana navigasyon ve Teklif Al CTA içerir; admin panel bağlantısı public header'a eklenmez. Mobile header hamburger ile erişilebilir menü açar, body scroll'u kilitler, Escape ile kapanır ve büyük touch target kullanır.

Tek bir ikon ailesi ve tutarlı stroke kullanılır. Standart boyutlar 16, 20, 24, 32 px'dir. Renkli oversized bubble ikonlar kullanılmaz.

## Card ve section sistemi

Her bilgiyi rounded card içine koymak yasaktır. Project, Product, Capability, Metric, Telemetry ve Info kartları aynı kabukla kopyalanmaz; split layout, border separator, editorial block, list, image+text, technical matrix ve architecture diagram da kullanılır.

- **Project Card:** kategori, teknoloji etiketi, başlık, müşteri/sektör, kısa açıklama ve detay linki. Desktop minimum içerik genişliği 280 px; başlık kelime kelime aşağı düşmez. Görsel varsa 16:9, `object-fit: cover`.
- **Product Card:** proje kartından daha görsel; görsel 4:3 veya 16:9, etiketler, başlık, excerpt ve CTA içerir.
- **Capability Card:** ikon/başlık/açıklama; kısa ve düz liste veya separator tercih edilir.
- **Metric Card:** sayı, birim, açıklama; sahte veri üretilemez.
- **Telemetry Panel:** koyu `#002F35` yüzey, `#01A487`/`#4AAEEC` sinyalleri, az ve anlamlı grid.
- **Info Card:** form veya iletişim bilgisini düzenler; gereksiz dekor yoktur.

Standart section sırası `Eyebrow → Title → Description → Optional action → Content` olabilir; her bölüm aynı layout'u zorunlu olarak tekrar etmez.

## Hero ve teknik görsel dil

Hero'da sol metin, sağda gerçek proje/PCB/endüstriyel sistem görseli bulunur. Sahte dashboard, rastgele gradient blob ve tam ekran neon PCB pattern kullanılmaz. Teknik dil; ince circuit line, küçük coordinate label, grid point, architecture connector ve component ID ile sınırlı ve anlamlı dozda kullanılır.

Görseller `next/image` ile optimize edilir; project 16:9, product 4:3/16:9, hero görseli `object-fit: cover` ve mobilde odak noktası korunacak crop kullanır. Her görsel anlamlı alt metin ve gerektiğinde caption taşır.

## Forms ve accessibility

Label her zaman görünürdür; placeholder label yerine geçmez. Input, textarea, select, checkbox, radio ve file upload aynı focus/border token'larını kullanır. Hata metni alanla ilişkilendirilir, başarı durumu açıkça bildirilir, disabled durum düşük kontrastla kaybolmaz.

Kontrast WCAG'e uygun, klavye navigasyonu eksiksiz, focus görünür, heading sırası semantik, touch target en az 44 px'tir. ARIA yalnızca semantiği gerçekten tamamlamak için kullanılır. Reduced motion desteklenir.

## Sayfa rehberleri

| Sayfa | Görsel amaç ve önerilen hiyerarşi | Kaçınılacak |
|---|---|---|
| HOME | Hero → System Telemetry → Engineering Capabilities → Featured Field Projects → Hardware + Software Integration → Trust Metrics → Quick Contact | Sahte dashboard, aynı kartın tekrarı |
| ABOUT | İnsan, yöntem, değer ve Ar-Ge güveni; editorial split ve gerçek ekip/tesis görselleri | Genel şirket klişeleri, dekoratif timeline fazlası |
| PROJECTS | Başlık/filtre → 3/2/1 kolon proje grid'i; kategori seçimi görünür ve erişilebilir | Dar kolon, yatay scroll, kart içinde kart |
| PROJECT DETAIL | Proje özeti → görsel/diagram → teknik kapsam → outcome/spec → CTA | CMS içeriğini hard-code etmek |
| PRODUCTS | Görsel ürün listesi, net kategori ve CTA | Proje kartını aynen kopyalamak |
| PRODUCT DETAIL | Ürün görseli → fayda → teknik özellik → entegrasyon → CTA | Özellikleri okunmaz tabloya sıkıştırmak |
| CONTACT | İletişim bilgileri + kısa form; güven ve ulaşılabilirlik | Teklif formuyla aynı akış |
| REQUEST QUOTE | Ayrı project intake/quote formu; alanlar ve dosya yükleme açık | İletişim sayfasına yönlendirmek, görünmeyen label |
| PAYLOAD ADMIN | İçerik Yönetimi, Operasyon, Sistem, Kurumsal Ayarlar grupları; usability birincil | Public site efektlerini admin'e taşımak |

CMS blokları fallback bileşenleriyle aynı token'ları kullanır. Payload schema'ları tasarım uğruna gereksiz değiştirilmez; editability korunur.

## Do / Don't

**DO**

- Beyaz alan, net hiyerarşi ve seçici marka rengi kullan.
- Gerçek mühendislik medyasını ve doğrulanabilir metrikleri öne çıkar.
- Mevcut component, token ve Payload editability'sini koru.
- Desktop ve mobil davranışı birlikte doğrula.
- Border-first, sakin ve teknik bir dil sürdür.

**DON'T**

- Rastgele gradient blob, her yerde neon glow veya sci-fi HUD ekleme.
- Her alanı büyük rounded card yapma.
- Sahte metrik, sahte dashboard veya uydurma içerik üretme.
- Aynı sayfada beş farklı card stili veya rastgele breakpoint kullanma.
- CMS içeriğini hard-code etme, unrelated alanları redesign etme.

## Rules for AI Coding Agents

Before editing UI:

1. Read `DESIGN.md`.
2. Reuse existing tokens.
3. Do not invent new colors.
4. Do not invent new radius values.
5. Do not invent new breakpoints.
6. Do not hard-code CMS content.
7. Preserve Payload CMS architecture.
8. Test desktop + mobile.
9. Avoid unnecessary dependencies.
10. Prefer existing components.
11. Do not redesign unrelated areas.
12. Respect accessibility.
13. Run TypeScript, lint and production build before completion.

Bu belge değiştiğinde yeni UI kararı önce burada açıklanır; ardından mevcut token/component yapısında uygulanır.
