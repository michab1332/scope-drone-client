<script setup lang="ts">
/**
 * HomeHero Component
 * Perfekcyjnie wyśrodkowany Badge (oś Y) i dopracowane RWD
 */
const img = useImage()
const posterUrl = img('/hero-image.jpg', { width: 1920, format: 'webp', quality: 80 })
</script>

<template>
  <section
    id="hero"
    class="relative min-h-[100vh] flex flex-col justify-center bg-black overflow-hidden px-4"
    aria-label="Hero Section"
  >
    <!-- Background Video -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <video
        autoplay
        loop
        muted
        playsinline
        class="w-full h-full object-cover opacity-60"
        :poster="posterUrl"
      >
        <source src="/assets/videos/pexels.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="absolute inset-0 bg-black/40" />
    </div>

    <!-- Content: Dodano padding-top, aby uwzględnić wysokość menu -->
    <AppContainer class="relative z-10 flex flex-col items-center justify-center text-center">
      <!-- Badge - Perfekcyjne wyśrodkowanie i mikro-skala na mobilkach -->
      <div 
        class="mb-3 md:mb-6 py-2 md:py-3 px-2.5 md:px-4 rounded-full border border-[#00E275]/20 bg-[#00E275]/5 backdrop-blur-md flex items-center justify-center"
      >
        <span class="text-[#00E275] text-[7px] md:text-[9px] font-bold uppercase tracking-[0.3em] leading-none select-none -mr-[0.3em]">
          Krzysztof Brzostek
        </span>
      </div>

      <!-- Main Title -->
      <div class="max-w-screen-xl mx-auto">
        <h1 
          class="text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-gray-50 via-gray-300 to-gray-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
        >
          Scopedrone
        </h1>
      </div>

      <!-- Description Text -->
      <div class="max-w-2xl mt-6 md:mt-8 px-4">
        <p class="text-gray-400 text-sm md:text-lg lg:text-xl font-light tracking-wide leading-relaxed text-balance">
          Profesjonalne ujęcia z powietrza. <br class="hidden md:block" />
          Odkryj potencjał nieruchomości, inwestycji i krajobrazów z zupełnie nowej perspektywy.
        </p>
      </div>
    </AppContainer>
    
    <!-- Bottom line -->
    <div class="absolute bottom-0 left-0 w-full h-px bg-gray-800" />
  </section>
</template>
