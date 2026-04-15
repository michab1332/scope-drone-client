# Dokumentacja SEO - Scopedrone

Niniejszy dokument opisuje wdrożoną strategię SEO (Search Engine Optimization) dla projektu Scopedrone oraz plany rozwoju w celu osiągnięcia najwyższych pozycji w wynikach wyszukiwania.

## 1. Aktualne Wdrożenie (Kwiecień 2026)

Obecnie strona działa jako nowoczesna Single Page Application (SPA) oparta na Nuxt 3/4, zoptymalizowana pod kątem szybkości i indeksowania.

### A. Konfiguracja Globalna (`nuxt.config.ts`)
- **Szablon Tytułu:** Ustawiono dynamiczny szablon `%s | Profesjonalne Ujęcia z Powietrza`, co zapewnia spójność marki na każdej podstronie.
- **Język:** Atrybut `lang="pl"` ustawiony na poziomie `<html>`, co pomaga wyszukiwarkom w poprawnym geotargetowaniu.
- **Meta Tagi Podstawowe:**
  - `viewport` i `charset` dla poprawnego renderowania mobilnego.
  - `author` ustawiony na "Krzysztof Brzostek".
  - Domyślny `description` dla całej witryny.

### B. Meta Dane Strony Głównej (`app/pages/index.vue`)
Wykorzystano funkcję `useSeoMeta()` oraz dane strukturalne JSON-LD:
- **Tytuł:** `Scopedrone | Nowa Perspektywa Twojej Inwestycji`.
- **OpenGraph (FB/Instagram):** Skonfigurowane tagi `ogTitle`, `ogDescription` oraz `ogImage`.
- **Twitter Card:** Ustawiony format `summary_large_image`.
- **Structured Data (JSON-LD):** Wdrożono obiekt `ProfessionalService`, który informuje Google o typie działalności, lokalizacji (Warmia i Mazury) oraz profilach społecznościowych.

### C. Image SEO i Dostępność
- **NuxtImg:** Zastąpiono style `background-image` komponentem `<NuxtImg>`, co pozwala wyszukiwarkom indeksować zdjęcia usług.
- **Alt Tags:** Wszystkie kluczowe obrazy (o nas, usługi, hero) posiadają opisowe atrybuty `alt` ze słowami kluczowymi.
- **Struktura Nagłówków:** Poprawne użycie `H1` w Hero i `H2` w sekcjach tematycznych.
- **Aria-labels:** Dodano etykiety dla czytników ekranu w `Navbar`, `Footer` oraz sekcji `Hero`.

---

## 2. Plany Przyszłego Rozwoju (Roadmap)

W miarę rozwoju projektu, rekomendowane jest wdrożenie następujących modułów i strategii:

### Faza 1: Techniczne Fundamenty (Priorytet: Wysoki)
1.  **`@nuxtjs/robots`**: Automatyczne generowanie pliku `robots.txt`, który instruuje roboty Google, co mają indeksować.
2.  **`@nuxtjs/sitemap`**: Dynamiczna mapa strony (nawet dla jednej strony), ułatwiająca szybkie odnajdywanie aktualizacji treści przez wyszukiwarki.
3.  **Weryfikacja w Search Console**: Połączenie domeny z Google Search Console w celu monitorowania błędów indeksowania.

### Faza 2: Analityka i Social Media (Priorytet: Średni)
1.  **`nuxt-og-image`**: Automatyczne generowanie obrazków podglądu (OpenGraph) bezpośrednio z komponentów Vue. Pozwala to na uniknięcie ręcznego tworzenia grafik `og:image`.
2.  **Google Analytics 4 / Plausible**: Implementacja lekkiej analityki bez zbierania danych wrażliwych (zgodnie z RODO).

### Faza 3: Rich Snippets & Schema (Priorytet: Ekspercki)
1.  **Schema.org (JSON-LD)**: Wdrożenie modułu `nuxt-schema-org` w celu wyświetlania tzw. "bogatych wyników":
    - **LocalBusiness / ProfessionalService**: Adres, telefon, godziny otwarcia.
    - **FAQ**: Jeśli dodasz sekcję najczęstszych pytań, mogą one pojawić się bezpośrednio w Google.
    - **Review**: Możliwość wyświetlania gwiazdek z ocenami klientów w wynikach wyszukiwania.

### Faza 4: Optymalizacja Treści (Content Strategy)
1.  **Słowa Kluczowe (LSI)**: Rozbudowa tekstów o frazy kluczowe (np. "filmowanie dronem Warszawa", "inspekcje budowlane z powietrza").
2.  **Blog / Case Studies**: Dodanie podstron z realizacjami (każda z własnym `useSeoMeta`) drastycznie zwiększy ilość fraz, na które strona będzie widoczna.

---

*Dokumentacja przygotowana przez Gemini CLI.*
