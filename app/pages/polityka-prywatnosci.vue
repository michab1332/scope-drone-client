<template>
  <div class="bg-black min-h-screen pt-32 pb-24 text-gray-300 font-sans">
    <AppContainer>
      <div class="max-w-3xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-black text-white mb-12 uppercase tracking-tighter">
          Polityka Prywatności <span class="text-gray-600">&</span> Regulamin
        </h1>

        <section class="mb-12">
          <h2 class="text-xl font-bold text-white mb-6 uppercase tracking-widest border-l-2 border-white pl-4">
            1. Informacje ogólne
          </h2>
          <div class="space-y-4 leading-relaxed">
            <p>
              Niniejszy dokument określa zasady przetwarzania danych osobowych oraz zasady korzystania z serwisu Scopedrone.
            </p>
            <p>
              Administratorem danych osobowych zbieranych za pośrednictwem strony jest:
              <br />
              <strong class="text-white">Krzysztof Brzostek</strong>
              <br />
              Adres: Olszyny 65
              <br />
              E-mail: <a href="mailto:scopedrone.kb@gmail.com" class="text-white hover:underline">scopedrone.kb@gmail.com</a>
            </p>
          </div>
        </section>

        <section class="mb-12">
          <h2 class="text-xl font-bold text-white mb-6 uppercase tracking-widest border-l-2 border-white pl-4">
            2. Przetwarzanie danych (RODO)
          </h2>
          <div class="space-y-4 leading-relaxed">
            <p>
              Dane osobowe (imię, adres e-mail, treść wiadomości) są zbierane za pośrednictwem formularza kontaktowego w celu udzielenia odpowiedzi na zapytanie ofertowe.
            </p>
            <ul class="list-disc pl-6 space-y-2">
              <li><strong>Podstawa prawna:</strong> Przetwarzanie jest niezbędne do podjęcia działań na żądanie osoby, której dane dotyczą, przed zawarciem umowy (Art. 6 ust. 1 lit. b RODO).</li>
              <li><strong>Dobrowolność:</strong> Podanie danych jest dobrowolne, jednak niezbędne do otrzymania odpowiedzi na zapytanie.</li>
              <li><strong>Odbiorcy danych:</strong> W celu zapewnienia sprawnej obsługi korespondencji, dane są przetwarzane przy użyciu narzędzi zewnętrznych dostawców:
                <ul class="list-circle pl-6 mt-2 opacity-80">
                  <li>Hetzner Online GmbH (Niemcy) – hosting serwera i bazy danych.</li>
                  <li>Resend, Inc. (USA) – usługa dostarczania poczty elektronicznej (przetwarzanie odbywa się w oparciu o Standardowe Klauzule Umowne zapewniające wysoki poziom ochrony).</li>
                </ul>
              </li>
              <li><strong>Okres przechowywania:</strong> Dane przechowywane są przez okres niezbędny do obsługi zapytania lub do momentu wycofania zgody / zgłoszenia sprzeciwu.</li>
              <li><strong>Twoje prawa:</strong> Masz prawo do dostępu do swoich danych, ich sprostowania, usunięcia ("prawo do bycia zapomnianym"), ograniczenia przetwarzania oraz prawo do wniesienia skargi do organu nadzorczego (Prezesa Urzędu Ochrony Danych Osobowych).</li>
            </ul>
          </div>
        </section>

        <section class="mb-12">
          <h2 class="text-xl font-bold text-white mb-6 uppercase tracking-widest border-l-2 border-white pl-4">
            3. Zasady korzystania z serwisu
          </h2>
          <div class="space-y-4 leading-relaxed">
            <p>
              Korzystanie z serwisu Scopedrone jest bezpłatne i ma charakter informacyjny.
            </p>
            <ul class="list-disc pl-6 space-y-2">
              <li>Wszystkie materiały (zdjęcia, filmy, teksty) są własnością Krzysztofa Brzostka i chronione są prawem autorskim.</li>
              <li>Zabrania się kopiowania i wykorzystywania treści bez wyraźnej zgody właściciela.</li>
              <li>Właściciel dokłada wszelkich starań, aby informacje na stronie były rzetelne, jednak nie ponosi odpowiedzialności za ewentualne błędy techniczne.</li>
            </ul>
          </div>
        </section>

        <section class="mb-12">
          <h2 class="text-xl font-bold text-white mb-6 uppercase tracking-widest border-l-2 border-white pl-4">
            4. Pliki Cookies
          </h2>
          <div class="space-y-4 leading-relaxed">
            <p>
              Strona wykorzystuje jedynie niezbędne pliki cookies służące do poprawnego działania mechanizmów technicznych serwisu. Nie stosujemy skryptów śledzących ani reklamowych osób trzecich bez Twojej wyraźnej zgody.
            </p>
          </div>
        </section>

        <div class="mt-20 pt-8 border-t border-gray-800 text-sm text-gray-500 italic">
          Ostatnia aktualizacja: {{ new Date().toLocaleDateString('pl-PL') }}
        </div>
      </div>
    </AppContainer>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Polityka Prywatności i Regulamin',
  meta: [
    { name: 'robots', content: 'noindex, follow' }
  ]
})
</script>
