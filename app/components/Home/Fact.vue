<script setup lang="ts">
import { ref, onMounted } from 'vue'

/**
 * Fact Component
 * Features:
 * - Intersection Observer for entrance animation
 * - Mouse-follow spotlight effect on hover
 */

// Animation visibility state
const isVisible = ref(false)
const sectionRef = ref<HTMLElement | null>(null)
const cardRef = ref<HTMLElement | null>(null)

// Mouse position for spotlight effect
const mouseX = ref(0)
const mouseY = ref(0)

/**
 * Handles mouse movement to update spotlight coordinates
 */
const handleMouseMove = (e: MouseEvent) => {
  if (!cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  mouseX.value = e.clientX - rect.left
  mouseY.value = e.clientY - rect.top
}

onMounted(() => {
  // Entrance animation observer
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      isVisible.value = true
      observer.disconnect()
    }
  }, { threshold: 0.2 })

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>

<template>
  <section
    id="fact"
    ref="sectionRef"
    class="py-24 border-b border-gray-900 bg-black relative overflow-hidden"
  >
    <!-- Static background ambient glow -->
    <div class="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

    <AppContainer>
      <div 
        ref="cardRef"
        @mousemove="handleMouseMove"
        class="group relative border border-primary/20 bg-white/[0.02] backdrop-blur-sm rounded-3xl p-8 md:p-16 transition-all duration-1000 transform overflow-hidden"
        :class="[
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        ]"
      >
        <!-- Interactive Mouse-follow Glow (Spotlight) -->
        <div 
          class="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          :style="{
            background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(205, 166, 96, 0.15), transparent 80%)`
          }"
        />

        <div class="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">

          <!-- Large Percentage Number -->
          <div class="flex-shrink-0">
            <span 
              class="text-7xl md:text-9xl font-black text-primary tracking-tighter leading-none block drop-shadow-[0_0_15px_rgba(205,166,96,0.3)]"
              :class="{ 'animate-glow-pulse': isVisible }"
            >
              45%
            </span>
          </div>


          <!-- Vertical/Horizontal Divider -->
          <div 
            class="w-full h-px md:w-px md:h-32 bg-gradient-to-r md:bg-gradient-to-b from-transparent via-gray-700 to-transparent transition-opacity duration-1000 delay-500"
            :class="isVisible ? 'opacity-50' : 'opacity-0'"
          />

          <!-- Text Content -->
          <div 
            class="flex-1 text-center md:text-left transition-all duration-1000 delay-300"
            :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'"
          >
            <h3 class="text-xl md:text-3xl font-bold text-white mb-4 uppercase tracking-tight leading-tight max-w-xl">
              Ofert nieruchomości sprzedaje się szybciej z ujęciami z drona
            </h3>
            <p class="text-gray-400 text-sm md:text-lg font-light leading-relaxed max-w-2xl text-balance">
              Wizualizacja z powietrza buduje natychmiastowe zaufanie, ukazuje pełen kontekst otoczenia i skutecznie wyróżnia ofertę na tle konkurencji, znacząco przyspieszając proces sprzedaży.
            </p>
          </div>

        </div>
      </div>
    </AppContainer>
  </section>
</template>

<style scoped>
@keyframes glow-pulse {
  0%, 100% {
    filter: drop-shadow(0 0 15px rgba(205, 166, 96, 0.3));
    transform: scale(1);
  }
  50% {
    filter: drop-shadow(0 0 25px rgba(205, 166, 96, 0.6));
    transform: scale(1.02);
  }
}

.animate-glow-pulse {
  animation: glow-pulse 4s ease-in-out infinite;
}
</style>
