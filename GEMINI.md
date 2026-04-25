# Scopedrone - Dokumentacja dla AI (Frontend)

Ten plik służy jako mapa drogowa i kontekst dla przyszłych sesji AI pracujących nad tą częścią projektu.

## 🏗 Architektura Projektu (Client)

Projekt to frontend zbudowany w **Nuxt 3** (wykorzystujący tryb kompatybilności Nuxt 4).
*   **Folder bazowy**: `app/` (zgodnie z Nuxt 4 compatibility).
*   **Stylizacja**: Tailwind CSS.
*   **Czcionki**: Inter (pobierane lokalnie przez `@nuxtjs/google-fonts` dla zgodności z RODO).
*   **Ikony**: Własny komponent `SharedIcon.vue`.

## ⚖️ Status Prawny i RODO (Kluczowe)

*   **Administrator**: Krzysztof Brzostek (osoba fizyczna).
*   **Dane Kontaktowe**: `scopedrone.kb@gmail.com`.
*   **Hosting**: Hetzner Online GmbH (Niemcy/UE). Baza danych również znajduje się na Hetznerze.
*   **Pliki Cookies**: 
    *   Obecnie **brak zewnętrznych trackerów** (Google Analytics, FB Pixel itp.).
    *   Nie ma dedykowanego banera cookies, ponieważ strona używa tylko ciasteczek technicznych.
    *   **Ważne**: Jeśli dodasz jakiekolwiek skrypty śledzące, musisz zaimplementować baner zgody.
*   **Podstrona Prawna**: `/polityka-prywatnosci` obsługuje zarówno Politykę Prywatności (RODO), jak i uproszczony Regulamin (prawa autorskie, zasady korzystania).

## 🛠 Konwencje i Decyzje Techniczne

1.  **RODO-by-design**: 
    *   Czcionki Google są konfigurowane z `download: true`, aby uniknąć przekazywania IP użytkownika do serwerów Google w USA.
2.  **Struktura Komponentów**: 
    *   Zorganizowana tematycznie w `app/components/`: `Home`, `Layout`, `Shared`.
    *   Layouty: `default.vue` dla standardowych stron i `landing.vue` dla strony głównej.
3.  **SEO**: 
    *   Konfiguracja globalna w `nuxt.config.ts`.
    *   Strona polityki ma ustawiony `noindex`.

## 📝 Zadania do Wykonania (Backlog)

- [ ] Uzupełnić fizyczny adres korespondencyjny w `app/pages/polityka-prywatnosci.vue`.
- [ ] Implementacja formularza kontaktowego (integracja z backendem w przyszłości).
- [ ] Opcjonalnie: Dodanie prostego `CookieBanner.vue`, jeśli dojdzie analityka.

## 💡 Wskazówki dla AI

*   Zawsze sprawdzaj `nuxt.config.ts` przed dodaniem nowych modułów.
*   Przy edycji stylów trzymaj się palety `black`, `white` i akcentów `orange/gray` zdefiniowanych w komponentach.
*   Pamiętaj, że projekt używa `compatibilityVersion: 4` w Nuxt, co wpływa na strukturę folderów.
