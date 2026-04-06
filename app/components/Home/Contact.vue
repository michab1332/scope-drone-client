<template>
  <section
      id="contact"
      class="py-32 bg-black overflow-hidden relative"
  >
    <AppContainer>
      <div class="border border-gray-800 p-16 relative z-10 bg-black/50">
        <div class="max-w-xl">
          <h2 class="text-5xl font-black uppercase tracking-tighter text-white mb-8 leading-none">CONTACT SECTION</h2>
          <p class="text-gray-500 font-sans text-[10px] uppercase tracking-widest font-bold mb-12 italic">HomeContact Component Placeholder</p>
          <div class="space-y-6">
            <div v-for="i in 3" :key="i" class="border-b border-gray-900 py-4 flex justify-between items-center text-sm font-bold uppercase tracking-widest text-gray-400">
              <span>FIELD 0{{ i }}</span>
              <span class="text-gray-900">____________________</span>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
    <!-- Background ornament -->
    <div class="absolute right-0 bottom-0 text-[20rem] font-black text-gray-900/10 leading-none select-none -mr-20 -mb-20 pointer-events-none">
      HIRE
    </div>
  </section>
</template>
<script setup lang="ts">
</script>