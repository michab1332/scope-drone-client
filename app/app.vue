<script setup lang="ts">
const consent = useCookie('cookie-consent', { default: () => 'undefined' })

useScriptGoogleAnalytics({
  id: 'G-N09G4D6SG2',
  defaultConsent: {
    analytics_storage: consent.value === 'accepted' ? 'granted' : 'denied',
    ad_storage: consent.value === 'accepted' ? 'granted' : 'denied',
    ad_user_data: consent.value === 'accepted' ? 'granted' : 'denied',
    ad_personalization: consent.value === 'accepted' ? 'granted' : 'denied'
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  
  <SharedCookieBanner />
</template>

