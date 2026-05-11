<script setup lang="ts">
const consent = useCookie('cookie-consent', { default: () => 'undefined' })

// Inicjalizacja Google Analytics z obsługą Consent Mode
useScriptGoogleAnalytics({
  id: 'G-N09G4D6SG2',
  /* 
    Advanced Consent Mode:
    Skrypt ładuje się zawsze, ale wysyła tylko anonimowe sygnały (pings) 
    dopóki analytics_storage nie zostanie ustawione na 'granted'.
  */
  options: {
    consent: consent.value === 'accepted' ? 'granted' : 'denied'
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  
  <!-- Globalny baner ciasteczek -->
  <SharedCookieBanner />
</template>

