<script setup lang="ts">
/**
 * Globalny komponent Logo/Icon z efektem obrotu na hover
 */
</script>

<template>
  <NuxtLink
    to="#hero"
    class="group font-bold text-xl uppercase tracking-tighter text-gray-100 hover:text-gray-300 transition-colors z-[120]"
  >
    <div class="flex gap-2 items-center">
      <img
        src="/assets/svgs/logo-orange.svg"
        alt="ScopeDrone Logo" 
        width="35" 
        height="35"
        class="transition-transform duration-700 ease-in-out group-hover:rotate-[360deg] select-none pointer-events-none"
      >
      <span class="uppercase font-sans">Scopedrone</span>
    </div>
  </NuxtLink>
</template>
