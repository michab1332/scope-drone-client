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
 */
definePageMeta({
  layout: 'landing'
})

useSeoMeta({
  title: 'Scopedrone | Usługi Dronem Warmia i Mazury | Filmowanie i Fotografia',
  ogTitle: 'Scopedrone - Profesjonalne Ujęcia z Powietrza',
  description: 'Profesjonalne filmowanie i fotografia dronem na Warmii i Mazurach. Realizujemy unikalne ujęcia dla nieruchomości, budownictwa i turystyki. Sprawdź ofertę!',
  ogDescription: 'Odkryj potencjał swoich projektów z powietrza na Mazurach. Profesjonalne usługi dronem Krzysztofa Brzostka.',
  ogImage: 'https://scopedrone.pl/hero-image.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogUrl: 'https://scopedrone.pl',
  ogSiteName: 'Scopedrone',
  twitterCard: 'summary_large_image',
  ogType: 'website',
  ogLocale: 'pl_PL',
})

// Structured Data & Head Metadata
useHead({
  link: [
    { rel: 'canonical', href: 'https://scopedrone.pl' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': 'Scopedrone - Krzysztof Brzostek',
        'alternateName': 'Usługi Dronem Warmia i Mazury',
        'description': 'Profesjonalne usługi dronem: filmowanie i fotografia z powietrza na Warmii i Mazurach. Specializing in real estate and construction.',
        'url': 'https://scopedrone.pl',
        'logo': 'https://scopedrone.pl/assets/images/logo.png',
        'image': 'https://scopedrone.pl/hero-image.jpg',
        'email': 'scopedrone.kb@gmail.com',
        'priceRange': '$$',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Olsztyn',
          'addressRegion': 'Warmińsko-Mazurskie',
          'addressCountry': 'PL'
        },
        'areaServed': [
          'Olsztyn',
          'Ostróda',
          'Mrągowo',
          'Giżycko',
          'Iława',
          'Warmia i Mazury'
        ],
        'founder': {
          '@type': 'Person',
          'name': 'Krzysztof Brzostek'
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
