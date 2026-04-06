<template>
  <div class="min-h-screen bg-black text-white font-sans flex flex-col">
    <LayoutNavbar />

    <main class="flex-grow">
      <slot />
    </main>

    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
/**
 * Landing Page Layout
 * Uses specialized navbar and footer
 */
</script>
