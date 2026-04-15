<template>
  <div>
    <HomeHero />
    <HomeFact />
    <HomeAdvantages />
    <HomeServices />
    <HomeAbout />
    <HomeContact />
  </div>
</template>

<script setup lang="ts">
/**
 * Home Page (Index)
 *
 */
definePageMeta({
  layout: 'landing'
})

useSeoMeta({
  title: 'Scopedrone | Nowa Perspektywa Twojej Inwestycji',
  ogTitle: 'Scopedrone - Profesjonalne Ujęcia z Powietrza',
  description: 'Profesjonalne filmowanie i fotografia dronem. Realizujemy unikalne ujęcia dla nieruchomości, turystyki i budownictwa. Sprawdź naszą ofertę.',
  ogDescription: 'Odkryj potencjał swoich projektów z powietrza. Profesjonalne usługi dronem Krzysztofa Brzostka.',
  ogImage: '/hero-image.jpg',
  twitterCard: 'summary_large_image',
})
</script>
