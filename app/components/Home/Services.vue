<script setup lang="ts">
import { ref, onMounted } from 'vue'

/**
 * Services Component
 * Features:
 * - Left-aligned header for consistency
 * - Image background cards with persistent descriptions
 * - Responsive layout and typography
 * - Scroll-triggered entrance animations
 */

interface Service {
  title: string
  description: string
  image: string
}

const services: Service[] = [
  {
    title: 'Działki i domy',
    description: 'Profesjonalne sesje z powietrza dla nieruchomości. Podkreślamy atuty lokalizacji i unikalny charakter obiektu.',
    image: '/assets/images/dzialka.jpg'
  },
  {
    title: 'Inwestycje',
    description: 'Dokumentacja postępów prac budowlanych oraz inspekcje techniczne. Precyzyjne ujęcia dla deweloperów.',
    image: '/assets/images/pexels-investments.jpg'
  },
  {
    title: 'Eventy',
    description: 'Dynamiczne relacje z wydarzeń plenerowych. Chwytamy emocje i skalę wydarzenia z unikalnej perspektywy.',
    image: '/assets/images/pexels-event.jpg'
  }
]

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      isVisible.value = true
      observer.disconnect()
    }
  }, { threshold: 0.1 })

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>

<template>
  <section
    id="services"
    ref="sectionRef"
    class="py-16 md:py-32 border-b border-gray-900 bg-black relative overflow-hidden"
  >
    <AppContainer>
      <!-- Left-aligned Header -->
      <div class="mb-12 md:mb-20 max-w-3xl">
        <h2 
          class="text-4xl md:text-7xl font-bold uppercase tracking-tighter text-white mb-6 transition-all duration-1000 px-4 md:px-0"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          Nasze Usługi
        </h2>
        <p 
          class="text-gray-400 text-sm md:text-xl font-light leading-relaxed transition-all duration-1000 delay-300 px-4 md:px-0"
          :class="isVisible ? 'opacity-100' : 'opacity-0'"
        >
          Dostarczamy wysokiej jakości materiały wizualne, które pomagają w sprzedaży i promocji Twoich projektów.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 px-4 md:px-0">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="group relative h-[350px] md:h-[550px] overflow-hidden rounded-2xl md:rounded-3xl border border-gray-800 transition-all duration-700"
          :style="{ transitionDelay: `${index * 150}ms` }"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
        >
          <!-- Background Image (NuxtImg for SEO) -->
          <NuxtImg 
            :src="service.image"
            :alt="`Scopedrone - Usługi: ${service.title}`"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            loading="lazy"
          />
          
          <!-- Overlay Gradients (Persistent darken for text readability) -->
          <div class="absolute inset-0 bg-black/40" />
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

          <!-- Content (Always Visible) -->
          <div class="absolute inset-0 p-6 md:p-12 flex flex-col justify-end">
            <!-- Green Accent Line -->
            <div class="w-10 h-1 bg-primary mb-4 md:mb-6 transform origin-left transition-transform duration-500 group-hover:scale-x-150 shadow-[0_0_10px_rgba(205,166,96,0.5)]" />
            
            <h3 class="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4 uppercase tracking-tighter">
              {{ service.title }}
            </h3>
            
            <p class="text-gray-300 text-xs md:text-base font-light leading-relaxed max-w-sm">
              {{ service.description }}
            </p>
          </div>

          <!-- Subtle Border Glow on Hover -->
          <div class="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-2xl md:rounded-3xl transition-colors duration-500 pointer-events-none" />
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<style scoped>
/* Mobile adjustments for text balance */
@media (max-width: 768px) {
  .text-balance-mobile {
    text-wrap: balance;
  }
}
</style>
