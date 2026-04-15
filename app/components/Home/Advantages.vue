<script setup lang="ts">
import { ref, onMounted } from 'vue'

/**
 * Advantages Component
 * Features:
 * - Mobile-optimized sizes (typography, icons, padding)
 * - Circular green icons for each advantage
 * - Staggered entrance animations for cards
 * - Interactive spotlight effect on hover
 */

interface Advantage {
  title: string
  description: string
  icon: string
}

const advantages: Advantage[] = [
  {
    title: 'Lokalizacja',
    description: 'Ukazanie dokładnego usytuowania działki lub budynku względem stron świata i innych obiektów.',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z'
  },
  {
    title: 'Otoczenie',
    description: 'Prezentacja walorów przyrodniczych: bliskość lasów, jezior (Warmia i Mazury) oraz terenów rekreacyjnych.',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
  },
  {
    title: 'Infrastruktura',
    description: 'Czytelne przedstawienie dróg dojazdowych, węzłów komunikacyjnych i sąsiadującej zabudowy.',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7'
  },
  {
    title: 'Skala',
    description: 'Prawdziwe oddanie wielkości działki i proporcji budynków, niemożliwe do uchwycenia z perspektywy pieszego.',
    icon: 'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5'
  }
]

// Refs for animations and interaction
const sectionRef = ref<HTMLElement | null>(null)
const cardRefs = ref<HTMLElement[]>([])
const isVisible = ref(false)

// Mouse tracking for spotlight
const mousePositions = ref<{ x: number; y: number }[]>(advantages.map(() => ({ x: 0, y: 0 })))

const handleMouseMove = (e: MouseEvent, index: number) => {
  const card = cardRefs.value[index]
  if (!card) return
  const rect = card.getBoundingClientRect()
  mousePositions.value[index] = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  }
}

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
    id="advantages"
    ref="sectionRef"
    class="py-16 md:py-24 border-b border-gray-900 bg-black relative overflow-hidden px-4"
  >
    <!-- Background accents -->
    <div class="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#00E275]/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />
    
    <AppContainer>
      <!-- Header Section -->
      <div class="mb-12 md:mb-20 max-w-4xl mx-auto text-center">
        <h2 
          class="text-3xl sm:text-4xl md:text-7xl font-bold uppercase tracking-tighter text-white mb-4 md:mb-8 transition-all duration-1000"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          Dlaczego zdjęcia <br class="md:hidden" /> z powietrza są ważne?
        </h2>
        <p 
          class="text-gray-400 text-sm md:text-xl font-light leading-relaxed transition-all duration-1000 delay-300 px-4"
          :class="isVisible ? 'opacity-100' : 'opacity-0'"
        >
          Kompleksowe spojrzenie na obiekt to klucz do skutecznej prezentacji. <br class="hidden md:block" />
          Dron pozwala pokazać to, co z ziemi jest niewidoczne.
        </p>
      </div>

      <!-- Advantages Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div 
          v-for="(item, index) in advantages" 
          :key="index"
          :ref="(el) => { if (el) cardRefs[index] = el as HTMLElement }"
          @mousemove="(e) => handleMouseMove(e, index)"
          class="group relative border border-gray-800 bg-white/[0.01] rounded-xl md:rounded-2xl p-6 md:p-12 overflow-hidden transition-all duration-700 hover:border-[#00E275]/30 hover:bg-white/[0.03]"
          :style="{ transitionDelay: `${index * 150}ms` }"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 md:translate-y-12'"
        >
          <!-- Interactive Spotlight (only on desktop/hover) -->
          <div 
            class="hidden md:block pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            :style="{
              background: `radial-gradient(400px circle at ${mousePositions[index].x}px ${mousePositions[index].y}px, rgba(0, 226, 117, 0.1), transparent 80%)`
            }"
          />

          <div class="relative z-10 flex flex-col sm:flex-row gap-4 md:gap-8 items-start">
            <!-- Icon with circular green background -->
            <div 
              class="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#00E275] flex items-center justify-center text-black shadow-[0_0_15px_rgba(0,226,117,0.2)] md:shadow-[0_0_20px_rgba(0,226,117,0.3)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="w-6 h-6 md:w-8 md:h-8" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" :d="item.icon" />
              </svg>
            </div>
            
            <div class="flex-1">
              <h3 class="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4 uppercase tracking-tight">
                {{ item.title }}
              </h3>
              
              <p class="text-gray-400 text-xs md:text-base leading-relaxed font-light text-balance">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  </section>
</template>
