/* ==========================================================================
   NXC — landing page SDK
   Skrip sederhana: i18n (ID/EN), tab kode, menu mobile, tema otomatis.
   Tanpa dependency.
   ========================================================================== */
(function () {
  "use strict";

  // ---------- Terjemahan -------------------------------------------------
  var I18N = {
    id: {
      "meta.title": "NXC — SDK Aplikasi Desktop Native C++ (Qt 6)",
      "meta.desc": "SDK untuk membangun aplikasi desktop native C++ di atas Qt 6 Widgets — satu binary ringan dengan fondasi aplikasi siap pakai.",

      "nav.features": "Fitur",
      "nav.philosophy": "Filosofi",
      "nav.runtime": "Runtime",
      "nav.code": "Kode",
      "nav.quickstart": "Mulai Cepat",
      "nav.modules": "Modul",
      "nav.download": "Unduh",
      "nav.repo": "Repositori",
      "nav.downloadCta": "Unduh SDK",

      "platform.label": "Berjalan di",
      "platform.win.note": "SDK siap pakai",
      "platform.linux.note": "SDK siap pakai",
      "platform.mac.note": "dari source",
      "platform.note": "Distribusi SDK siap pakai: <strong>Windows x64</strong> dan <strong>Linux x64</strong> (Qt 6.8). macOS berjalan dari source yang sama — diuji otomatis di CI Windows + Ubuntu.",

      "hero.badge": "SDK 0.3.x · Windows &amp; Linux · Qt 6.8 · C++",
      "hero.title": "Aplikasi desktop native, tanpa Electron.",
      "hero.lead": "NXC adalah SDK C++ di atas Qt 6 Widgets: satu binary ringan dengan fondasi aplikasi siap pakai — window Fluent, terminal sungguhan, tema, shortcut, database, dan runtime bridge.",
      "hero.ctaPrimary": "Mulai dalam 1 menit",
      "hero.ctaSecondary": "Lihat kode",
      "hero.statHeaders": "header publik",
      "hero.statRuntime": "runtime bridge",
      "hero.statTests": "suite test lolos",
      "hero.windowTitle": "NXC Qt6 — Jendela 1",
      "hero.menuFile": "File",
      "hero.menuView": "View",
      "hero.menuHelp": "Help",
      "hero.bodyTitle": "Window management native C++ (Qt 6)",
      "hero.bodyText": "Title bar, border, dan tombol window digambar sendiri — drag, double-click maximize, resize dari tepi.",
      "hero.logLine": "Jendela 1 siap.",

      "features.title": "Semua yang dibutuhkan aplikasi desktop",
      "features.subtitle": "NXC menyediakan mekanismenya; Anda menentukan isi aplikasinya.",
      "features.window.title": "Window Fluent",
      "features.window.text": "Frameless ala Windows 11: title bar kustom, resize dari tepi, sudut membulat, dan Mica — tanpa garis tepi.",
      "features.input.title": "Keyboard & Shortcut",
      "features.input.text": "Shortcut terpusat dengan scope Application/Window/Context, chord (Ctrl+K, Ctrl+S), deteksi konflik, dan enable/disable.",
      "features.terminal.title": "Terminal sungguhan",
      "features.terminal.text": "PTY + emulator VT: ketik langsung, warna, Tab-completion, saran PowerShell 7, dan vim — seperti terminal asli.",
      "features.theme.title": "Tema & preferensi",
      "features.theme.text": "Tema gelap/terang hot-swap, preferensi tersimpan otomatis, dan tray icon dengan menu standar.",
      "features.router.title": "Routing halaman",
      "features.router.text": "Router bergaya web — rute <code>/produk/:id</code>, query, back/forward — plus sidebar navigasi Fluent.",
      "features.runtime.title": "Runtime bridge",
      "features.runtime.text": "Panggil JavaScript in-process, Node.js, atau Python lewat satu protokol pesan JSON yang sama.",

      "philo.title": "NXC menyediakan HOW. Anda menentukan WHAT.",
      "philo.subtitle": "Satu fondasi desktop untuk banyak aplikasi — mekanisme disediakan NXC, isi dan tujuan aplikasi tetap milik Anda.",
      "philo.layer.app": "Aplikasi Anda",
      "philo.layer.appSub": "UI · Logic · Business",
      "philo.layer.runtime": "NXC Runtime Layer",
      "philo.layer.core": "NXC Core",
      "philo.layer.coreSub": "Window · Menu · Keyboard · Shortcut · Terminal · Theme · Settings · Tray",
      "philo.layer.os": "Sistem Operasi",
      "philo.how.title": "NXC menyediakan (HOW)",
      "philo.how.1": "Window & title bar Fluent",
      "philo.how.2": "Menu, context menu, dialog",
      "philo.how.3": "Keyboard & shortcut terpusat",
      "philo.how.4": "Terminal + process bridge (PTY)",
      "philo.how.5": "Theme, settings, tray, event bus",
      "philo.how.6": "Routing halaman + sidebar",
      "philo.how.7": "Runtime bridge opsional",
      "philo.what.title": "Anda menentukan (WHAT)",
      "philo.what.1": "UI & komposisi halaman",
      "philo.what.2": "Logika bisnis & alur aplikasi",
      "philo.what.3": "Schema & query database",
      "philo.what.4": "Protokol & isi pesan WebSocket",
      "philo.what.5": "Backend, autentikasi, otorisasi",
      "philo.what.6": "Workflow AI & pemrosesan data",
      "philo.what.7": "Model bisnis & produk akhir",

      "runtime.title": "Runtime opsional, sesuai kebutuhan",
      "runtime.subtitle": "Mulai murni C++/Qt, lalu tambahkan JavaScript, Node.js, atau Python hanya bila aplikasi Anda memerlukannya.",
      "runtime.cpp.title": "C++ / Qt",
      "runtime.cpp.text": "Core native — wajib ada di setiap aplikasi NXC.",
      "runtime.js.text": "In-process (QJSEngine) untuk scripting ringan, plugin, dan automation.",
      "runtime.node.text": "Out-of-process untuk ekosistem npm, tooling, dan layanan.",
      "runtime.py.text": "Untuk AI, machine learning, data, dan komputasi ilmiah.",
      "runtime.note": "Bisa juga dipakai semuanya sekaligus — satu protokol pesan JSON yang sama.",

      "code.title": "Sedikit kode, aplikasi jadi",
      "code.subtitle": "Turunkan <code>nxc::Window</code>, serahkan pabriknya ke <code>nxc::Application</code>.",
      "code.p1.title": "Satu binary ringan",
      "code.p1.text": "Jauh lebih kecil dari Electron — tanpa Chromium, tanpa Node di dalam paket.",
      "code.p2.title": "API publik yang stabil",
      "code.p2.text": "22 header di <code>namespace nxc</code>, kompatibilitas <code>SameMajorVersion</code>.",
      "code.p3.title": "Deploy otomatis",
      "code.p3.text": "<code>nxc_deploy()</code> menyalin DLL yang dibutuhkan — exe langsung jalan.",

      "qs.title": "Mulai cepat",
      "qs.subtitle": "Satu perintah membuat project siap build.",
      "qs.terminalTitle": "Terminal",
      "qs.commentDev": "# build Debug + jalankan",
      "qs.commentDist": "# installer / paket siap bagi",
      "qs.s1.title": "Prasyarat",
      "qs.s1.text": "Qt 6.8 (kit MSVC 2022 64-bit), Visual Studio 2022 Build Tools, CMake ≥ 3.21, Node.js ≥ 18.",
      "qs.s2.title": "Scaffold",
      "qs.s2.text": "Perintah membuat CMakeLists, preset, dan struktur <code>src/</code>, lalu mengunduh SDK dari Releases.",
      "qs.s3.title": "Build & jalankan",
      "qs.s3.text": "<code>npm run dev</code> build Debug dan langsung menjalankan aplikasi.",

      "modules.title": "Modul opsional",
      "modules.subtitle": "Library terpisah — hanya ikut dibawa kalau aplikasi Anda memakainya.",
      "modules.db.title": "Database",
      "modules.db.text": "SQLite (atau driver lain), koneksi per thread, query async, transaksi, dan migrasi <code>NNN_nama.sql</code>.",
      "modules.ws.title": "WebSocket",
      "modules.ws.text": "Client dengan reconnect + backoff eksponensial, antrean pesan saat offline, ping keepalive, dan helper JSON.",

      "sdk.title": "Unduh SDK",
      "sdk.subtitle": "SDK dibagikan sebagai aset rilis GitHub. Source NXC tidak dipublikasikan.",
      "sdk.release.title": "Rilis terbaru — Windows &amp; Linux",
      "sdk.release.text": "Aset <code>nxc-sdk-&lt;versi&gt;-qt&lt;qt&gt;-windows.tar.gz</code> (Windows x64, Debug + Release) dan <code>nxc-sdk-&lt;versi&gt;-qt&lt;qt&gt;-linux.tar.gz</code> (Linux x64). macOS dibangun dari source yang sama (lihat repositori).",
      "sdk.release.cta": "Buka Releases",
      "sdk.npm.title": "Scaffolder npm",
      "sdk.npm.text": "Paket <code>create-nxc-app</code> tanpa dependency — membuat project dan mengunduh SDK otomatis.",
      "sdk.npm.cta": "Lihat di npm",
      "sdk.docs.title": "Dokumentasi",
      "sdk.docs.text": "Referensi per header (<code>docs/API.md</code>) dan panduan developer (<code>docs/Developer.md</code>).",
      "sdk.docs.cta": "Lihat di GitHub",

      "cta.title": "Siap membangun aplikasi desktop native?",
      "cta.text": "Mulai dari template, build, lalu sesuaikan dengan kebutuhan Anda.",
      "cta.button": "Mulai sekarang",

      "footer.note": "SDK proprietary (UNLICENSED). Qt 6 di bawah LGPLv3, Fluent System Icons di bawah MIT.",
      "footer.top": "Ke atas"
    },

    en: {
      "meta.title": "NXC — Native C++ Desktop App SDK (Qt 6)",
      "meta.desc": "SDK for building native C++ desktop apps on Qt 6 Widgets — one lightweight binary with a ready-made app foundation.",

      "nav.features": "Features",
      "nav.philosophy": "Philosophy",
      "nav.runtime": "Runtime",
      "nav.code": "Code",
      "nav.quickstart": "Quick start",
      "nav.modules": "Modules",
      "nav.download": "Download",
      "nav.repo": "Repository",
      "nav.downloadCta": "Get the SDK",

      "platform.label": "Runs on",
      "platform.win.note": "ready-made SDK",
      "platform.linux.note": "ready-made SDK",
      "platform.mac.note": "from source",
      "platform.note": "The ready-made SDK ships for <strong>Windows x64</strong> and <strong>Linux x64</strong> (Qt 6.8). macOS runs from the same source — automatically tested on Windows + Ubuntu CI.",

      "hero.badge": "SDK 0.3.x · Windows &amp; Linux · Qt 6.8 · C++",
      "hero.title": "Native desktop apps, without Electron.",
      "hero.lead": "NXC is a C++ SDK on top of Qt 6 Widgets: one lightweight binary with a ready-made app foundation — Fluent windows, a real terminal, themes, shortcuts, database, and runtime bridges.",
      "hero.ctaPrimary": "Start in 1 minute",
      "hero.ctaSecondary": "See the code",
      "hero.statHeaders": "public headers",
      "hero.statRuntime": "runtime bridges",
      "hero.statTests": "test suites passing",
      "hero.windowTitle": "NXC Qt6 — Window 1",
      "hero.menuFile": "File",
      "hero.menuView": "View",
      "hero.menuHelp": "Help",
      "hero.bodyTitle": "Native C++ window management (Qt 6)",
      "hero.bodyText": "Title bar, border, and window buttons are drawn by the SDK — drag, double-click to maximize, resize from the edges.",
      "hero.logLine": "Window 1 ready.",

      "features.title": "Everything a desktop app needs",
      "features.subtitle": "NXC provides the mechanism; you define what the app does.",
      "features.window.title": "Fluent window",
      "features.window.text": "Frameless, Windows 11 style: custom title bar, edge resize, rounded corners, and Mica — with no border line.",
      "features.input.title": "Keyboard & shortcuts",
      "features.input.text": "Centralized shortcuts with Application/Window/Context scopes, chords (Ctrl+K, Ctrl+S), conflict detection, and enable/disable.",
      "features.terminal.title": "A real terminal",
      "features.terminal.text": "PTY + VT emulator: type directly, colors, Tab-completion, PowerShell 7 suggestions, and vim — just like a real terminal.",
      "features.theme.title": "Theme & preferences",
      "features.theme.text": "Hot-swappable dark/light themes, automatically persisted preferences, and a tray icon with a standard menu.",
      "features.router.title": "Page routing",
      "features.router.text": "Web-style router — routes like <code>/products/:id</code>, query, back/forward — plus a Fluent navigation sidebar.",
      "features.runtime.title": "Runtime bridges",
      "features.runtime.text": "Call in-process JavaScript, Node.js, or Python through one shared JSON message protocol.",

      "philo.title": "NXC provides the HOW. You decide the WHAT.",
      "philo.subtitle": "One desktop foundation for many apps — NXC supplies the mechanism, the app's content and purpose stay yours.",
      "philo.layer.app": "Your application",
      "philo.layer.appSub": "UI · Logic · Business",
      "philo.layer.runtime": "NXC Runtime Layer",
      "philo.layer.core": "NXC Core",
      "philo.layer.coreSub": "Window · Menu · Keyboard · Shortcut · Terminal · Theme · Settings · Tray",
      "philo.layer.os": "Operating System",
      "philo.how.title": "NXC provides (HOW)",
      "philo.how.1": "Fluent window & title bar",
      "philo.how.2": "Menu, context menu, dialog",
      "philo.how.3": "Centralized keyboard & shortcuts",
      "philo.how.4": "Terminal + process bridge (PTY)",
      "philo.how.5": "Theme, settings, tray, event bus",
      "philo.how.6": "Page routing + sidebar",
      "philo.how.7": "Optional runtime bridges",
      "philo.what.title": "You decide (WHAT)",
      "philo.what.1": "UI & page composition",
      "philo.what.2": "Business logic & app flow",
      "philo.what.3": "Database schema & queries",
      "philo.what.4": "WebSocket protocol & messages",
      "philo.what.5": "Backend, auth, authorization",
      "philo.what.6": "AI workflow & data processing",
      "philo.what.7": "Business model & final product",

      "runtime.title": "Optional runtimes, as needed",
      "runtime.subtitle": "Start with pure C++/Qt, then add JavaScript, Node.js, or Python only when your app needs it.",
      "runtime.cpp.title": "C++ / Qt",
      "runtime.cpp.text": "The native core — required in every NXC app.",
      "runtime.js.text": "In-process (QJSEngine) for lightweight scripting, plugins, and automation.",
      "runtime.node.text": "Out-of-process for the npm ecosystem, tooling, and services.",
      "runtime.py.text": "For AI, machine learning, data, and scientific computing.",
      "runtime.note": "Or use them all at once — through one shared JSON message protocol.",

      "code.title": "A little code, a running app",
      "code.subtitle": "Subclass <code>nxc::Window</code>, hand its factory to <code>nxc::Application</code>.",
      "code.p1.title": "One lightweight binary",
      "code.p1.text": "Far smaller than Electron — no Chromium, no Node bundled in.",
      "code.p2.title": "A stable public API",
      "code.p2.text": "22 headers in <code>namespace nxc</code>, <code>SameMajorVersion</code> compatibility.",
      "code.p3.title": "Automatic deploy",
      "code.p3.text": "<code>nxc_deploy()</code> copies the required DLLs — the exe just runs.",

      "qs.title": "Quick start",
      "qs.subtitle": "One command creates a build-ready project.",
      "qs.terminalTitle": "Terminal",
      "qs.commentDev": "# build Debug + run",
      "qs.commentDist": "# installer / distributable",
      "qs.s1.title": "Prerequisites",
      "qs.s1.text": "Qt 6.8 (MSVC 2022 64-bit kit), Visual Studio 2022 Build Tools, CMake ≥ 3.21, Node.js ≥ 18.",
      "qs.s2.title": "Scaffold",
      "qs.s2.text": "The command creates CMakeLists, presets, and a <code>src/</code> tree, then downloads the SDK from Releases.",
      "qs.s3.title": "Build & run",
      "qs.s3.text": "<code>npm run dev</code> builds Debug and launches the app right away.",

      "modules.title": "Optional modules",
      "modules.subtitle": "Separate libraries — only shipped when your app uses them.",
      "modules.db.title": "Database",
      "modules.db.text": "SQLite (or other drivers), per-thread connections, async queries, transactions, and <code>NNN_name.sql</code> migrations.",
      "modules.ws.title": "WebSocket",
      "modules.ws.text": "Client with reconnect + exponential backoff, offline message queue, keepalive ping, and JSON helpers.",

      "sdk.title": "Get the SDK",
      "sdk.subtitle": "The SDK is distributed as a GitHub release asset. NXC source is not published.",
      "sdk.release.title": "Latest release — Windows &amp; Linux",
      "sdk.release.text": "Assets <code>nxc-sdk-&lt;version&gt;-qt&lt;qt&gt;-windows.tar.gz</code> (Windows x64, Debug + Release) and <code>nxc-sdk-&lt;version&gt;-qt&lt;qt&gt;-linux.tar.gz</code> (Linux x64). macOS builds from the same source (see repository).",
      "sdk.release.cta": "Open Releases",
      "sdk.npm.title": "npm scaffolder",
      "sdk.npm.text": "The dependency-free <code>create-nxc-app</code> package — scaffolds a project and downloads the SDK automatically.",
      "sdk.npm.cta": "View on npm",
      "sdk.docs.title": "Documentation",
      "sdk.docs.text": "Per-header reference (<code>docs/API.md</code>) and the developer guide (<code>docs/Developer.md</code>).",
      "sdk.docs.cta": "View on GitHub",

      "cta.title": "Ready to build a native desktop app?",
      "cta.text": "Start from the template, build, then make it your own.",
      "cta.button": "Get started",

      "footer.note": "Proprietary SDK (UNLICENSED). Qt 6 under LGPLv3, Fluent System Icons under MIT.",
      "footer.top": "Back to top"
    }
  };

  var STORAGE_KEY = "nxc-lang";

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.id;

    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("data-lang", lang);

    if (dict["meta.title"]) document.title = dict["meta.title"];
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict["meta.desc"]) metaDesc.setAttribute("content", dict["meta.desc"]);

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (dict[key] != null) nodes[i].innerHTML = dict[key];
    }

    var buttons = document.querySelectorAll("[data-lang-btn]");
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].classList.toggle("active", buttons[j].getAttribute("data-lang-btn") === lang);
    }

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* abaikan */ }
  }

  function detectLang() {
    try {
      var q = new URLSearchParams(window.location.search).get("lang");
      if (q === "id" || q === "en") return q;
    } catch (e) { /* abaikan */ }
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "id" || saved === "en") return saved;
    } catch (e) { /* abaikan */ }
    return (navigator.language || "id").toLowerCase().indexOf("id") === 0 ? "id" : "en";
  }

  // ---------- Tema: ?theme=dark|light, atau preferensi sistem ----------
  function applyTheme() {
    var forced = null;
    try {
      var q = new URLSearchParams(window.location.search).get("theme");
      if (q === "dark" || q === "light") forced = q;
    } catch (e) { /* abaikan */ }
    if (forced) {
      document.documentElement.setAttribute("data-theme", forced);
      return;
    }
    var dark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }

  // ---------- Tab kode ----------------------------------------------------
  function initCodeTabs() {
    var tabs = document.querySelectorAll(".code-tab");
    var panels = document.querySelectorAll(".code-block");
    function select(name) {
      for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.toggle("active", tabs[i].getAttribute("data-tab") === name);
      }
      for (var j = 0; j < panels.length; j++) {
        panels[j].classList.toggle("hidden", panels[j].getAttribute("data-panel") !== name);
      }
    }
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", function () { select(this.getAttribute("data-tab")); });
    }
  }

  // ---------- Menu mobile -------------------------------------------------
  function initNavToggle() {
    var toggle = document.getElementById("navToggle");
    var nav = document.getElementById("nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () { nav.classList.toggle("open"); });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") nav.classList.remove("open");
    });
  }

  // ---------- Boot --------------------------------------------------------
  document.addEventListener("DOMContentLoaded", function () {
    applyTheme();
    if (window.matchMedia) {
      var mq = window.matchMedia("(prefers-color-scheme: dark)");
      if (mq.addEventListener) mq.addEventListener("change", applyTheme);
      else if (mq.addListener) mq.addListener(applyTheme);
    }

    var buttons = document.querySelectorAll("[data-lang-btn]");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        applyLang(this.getAttribute("data-lang-btn"));
      });
    }

    applyLang(detectLang());
    initCodeTabs();
    initNavToggle();
  });
})();
