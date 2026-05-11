<script setup lang="ts">
const { consent, acceptAll, declineAll } = useCookieConsent()

function useCookieConsent() {
  const consent = useCookie<'accepted' | 'declined' | 'undefined'>('cookie-consent', {
    maxAge: 60 * 60 * 24 * 365, // 1 year
    default: () => 'undefined'
  })

  const acceptAll = () => {
    consent.value = 'accepted'
    // Refresh page or trigger scripts update if needed
    window.location.reload()
  }

  const declineAll = () => {
    consent.value = 'declined'
    window.location.reload()
  }

  return {
    consent,
    acceptAll,
    declineAll
  }
}
</script>

<template>
  <Transition
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="translate-y-full opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-300 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-full opacity-0"
  >
    <div
      v-if="consent === 'undefined'"
      class="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
    >
      <div class="mx-auto max-w-4xl bg-white/95 backdrop-blur-md border border-gray-100 shadow-2xl rounded-2xl overflow-hidden">
        <div class="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
          <!-- Ikona/Grafika -->
          <div class="hidden md:flex flex-shrink-0 w-16 h-16 bg-orange-50 items-center justify-center rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
              <path d="M8.5 8.5v.01" />
              <path d="M16 15.5v.01" />
              <path d="M12 12v.01" />
              <path d="M11 17v.01" />
              <path d="M7 14v.01" />
            </svg>
          </div>

          <!-- Treść -->
          <div class="flex-grow text-center md:text-left">
            <h3 class="text-lg font-bold text-gray-900 mb-1">Dbamy o Twoją prywatność</h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              Używamy ciasteczek, aby analizować ruch na stronie i poprawiać jej działanie. Klikając „Akceptuję”, wyrażasz zgodę na używanie wszystkich plików cookie. Możesz też dowiedzieć się więcej w naszej 
              <NuxtLink to="/polityka-prywatnosci" class="text-orange-600 hover:text-orange-700 underline font-medium tracking-tight">Polityce Prywatności</NuxtLink>.
            </p>
          </div>

          <!-- Przyciski -->
          <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              @click="declineAll"
              class="px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 bg-white border border-gray-200 rounded-xl transition-all duration-200"
            >
              Odrzuć opcjonalne
            </button>
            <button
              @click="acceptAll"
              class="px-6 py-3 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-xl shadow-lg shadow-orange-200 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Akceptuję wszystkie
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
