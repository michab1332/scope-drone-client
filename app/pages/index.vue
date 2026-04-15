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

// JSON-LD Structured Data
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        'name': 'Scopedrone - Krzysztof Brzostek',
        'description': 'Profesjonalne usługi dronem: filmowanie i fotografia z powietrza na Warmii i Mazurach.',
        'url': 'https://scopedrone.pl',
        'image': 'https://scopedrone.pl/hero-image.jpg',
        'address': {
          '@type': 'PostalAddress',
          'addressRegion': 'Warmińsko-Mazurskie',
          'addressCountry': 'PL'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': '53.7784',
          'longitude': '20.4801'
        },
        'openingHoursSpecification': {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': [
            'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
          ],
          'opens': '08:00',
          'closes': '20:00'
        },
        'sameAs': [
          'https://www.facebook.com/profile.php?id=61580575165689',
          'https://www.instagram.com/scopedrone_kb'
        ]
      })
    }
  ]
})
</script>
