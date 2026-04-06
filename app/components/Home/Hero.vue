<script setup lang="ts">
/**
 * HomeHero Component
 * Full-width background video with centered content
 */
const img = useImage()
const posterUrl = img('/hero-image.jpg', { width: 1920, format: 'webp', quality: 80 })
</script>

<template>
  <section
      id="hero"
      class="relative min-h-[90vh] flex flex-col justify-center bg-black overflow-hidden"
      aria-label="Hero Section"
  >
    <!-- Background Video: Full Width & Full Height -->
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
      <!-- Overlay to ensure text readability -->
      <div class="absolute inset-0 bg-black/40" />
    </div>

    <!-- Content: Centered by AppContainer -->
    <AppContainer class="relative z-10">

    </AppContainer>
    
    <!-- Bottom line ornament -->
    <div class="absolute bottom-0 left-0 w-full h-px bg-gray-800" />
  </section>
</template>
