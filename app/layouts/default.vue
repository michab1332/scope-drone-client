<template>
  <div class="min-h-screen bg-black text-white font-sans flex flex-col">
    <LayoutNavbar />

    <main class="flex-grow py-12">
      <AppContainer>
        <slot />
      </AppContainer>
    </main>

    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
/**
 * Default Page Layout
 */
</script>
