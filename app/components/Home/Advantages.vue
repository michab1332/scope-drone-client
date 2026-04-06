<template>
  <section
      id="advantages"
      class="py-24 border-b border-gray-900 bg-black"
  >
    <AppContainer>
      <div class="mb-12 border-l-4 border-gray-800 pl-6">
        <h2 class="text-3xl font-bold uppercase tracking-tighter text-white">ADVANTAGES SECTION</h2>
        <p class="text-gray-600 font-sans text-[10px] uppercase tracking-widest font-bold">HomeAdvantages Component Placeholder</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="i in 3" :key="i" class="border border-gray-900 p-8 hover:border-gray-700 transition-colors bg-black/50">
          <div class="text-gray-800 font-black text-4xl mb-4">0{{ i }}</div>
          <div class="h-2 w-12 bg-gray-900 mb-6" />
          <div class="h-4 bg-gray-900 w-3/4 mb-2" />
          <div class="h-4 bg-gray-900 w-1/2" />
        </div>
      </div>
    </AppContainer>
  </section>
</template>
