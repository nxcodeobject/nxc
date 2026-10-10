# website — Landing page SDK NXC

Halaman produk publik untuk SDK NXC (Qt 6). Statis: HTML + CSS + JS murni,
tanpa dependency, tanpa build step. Disajikan oleh live-reload NxCode di
`http://localhost:8082/`.

## Masalah

`nxc/nxc-public/` adalah repo publik (README, LICENSE, `docs/API.md`,
`docs/Developer.md`, paket `create-nxc-app`), tetapi belum ada **halaman web**
yang memperkenalkan SDK kepada calon pengguna. Tujuannya: satu landing page
yang menjelaskan apa itu NXC, apa yang disediakan, cara mulai, dan tautan
unduh.

## Keputusan desain

- **Landing page**, bukan situs dokumentasi (dokumentasi tetap di
  `nxc-public/docs/`). Fokus: pengenalan → fitur → kode → mulai cepat → unduh.
- **Bilingual ID/EN** — toggle di header; pilihan disimpan di `localStorage`;
  default mengikuti `navigator.language`. Bisa dipaksa lewat `?lang=id|en`.
- **Tanpa dependency & tanpa build** — sesuai aturan proyek (JS murni bila
  tidak butuh framework). Aset gambar disalin dari repo SDK ke `assets/`.
- **Tema terang/gelap** otomatis dari `prefers-color-scheme`, bisa dipaksa
  lewat `?theme=dark|light`. Palet mengikuti SDK (aksen `#0078d4`, gelap
  `#202020`, terang `#f3f3f3`).
- **Struktur bagian**: hero → strip platform → fitur → filosofi (HOW/WHAT +
  diagram lapisan) → runtime opsional → kode → mulai cepat → modul opsional →
  unduh SDK → CTA.
- **Ikon**: Google **Material Symbols Rounded** (dimuat dari Google Fonts di
  `<head>`), bukan emoji. Butuh koneksi internet saat halaman dibuka.
- **Platform**: SDK siap pakai = Windows x64 + Linux x64 (keduanya Qt 6.8.3);
  macOS berjalan dari source (dinyatakan apa adanya, tidak mengklaim lebih).

### Mana yang masuk web (dari `README.md` / `Plan.md` / `Foundation.md`)

Masuk — hanya **mekanisme/fondasi publik**:

- Filosofi inti: **"NXC menyediakan HOW. Developer menentukan WHAT."** (§1, §20)
- Arsitektur berlapis: Developer App → Runtime Layer → NXC Core → Qt 6 → OS (§9)
- Konfigurasi runtime opsional: C++ saja / +JS / +Node / +Python / semua (§10)
- Area Desktop Foundation (§7): window, menu, context menu, keyboard &
  shortcut, terminal, theme, settings, tray, events, routing, UI foundation
- Modul opsional Database & WebSocket (§7.6)
- Cara mulai (`create-nxc-app`) & tautan Releases/npm
- Batas tanggung jawab: yang **bukan** NXC (§12) — logika bisnis, schema DB,
  protokol pesan, dsb. tetap milik developer

Tidak masuk — internal / meta:

- Detail implementasi (`TitleBar`, `platform.{h,cpp}`, QSS, DWM, `shortcut_p.h`)
- Proses rilis/publish, catatan bug/insiden, roadmap fase, hasil `ctest`
  per-kasus — semua ada di dokumen internal repo.

## File yang disentuh

- `index.html` — struktur halaman + hook `data-i18n`
- `style.css` — tema Fluent (gelap/terang), responsif
- `index.js` — kamus i18n ID/EN, tab kode, menu mobile, tema
- `assets/` — logo & screenshot (salinan dari `nxc/qt6/`)

## Status: SUDAH DIEKSEKUSI ✅

Verifikasi: halaman tersaji di `http://localhost:8082/`; render headless
Chrome (terang & `?theme=dark`) tampil utuh tanpa error; `node --check
index.js` lolos.
