<template>
  <div>
    <HomeHero />
    <HomeAdvantages />
    <HomeServices />
    <HomeAbout />
    <HomeContact />
  </div>
</template>

<script setup lang="ts">
/**
 * Strona główna (Index)
 * Struktura oparta na komponentach z folderu app/components/Home/
 */
definePageMeta({
  layout: 'landing'
})
</script>
