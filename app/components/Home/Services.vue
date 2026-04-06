<template>
  <section
      id="services"
      class="py-24 border-b border-gray-900 bg-black"
  >
    <AppContainer>
      <div class="mb-12 text-center">
        <h2 class="text-3xl font-bold uppercase tracking-tighter text-white">SERVICES SECTION</h2>
        <p class="text-gray-600 font-sans text-[10px] uppercase tracking-widest font-bold">HomeServices Component Placeholder</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="i in 4" :key="i" class="border border-gray-900 p-12 bg-black/50 hover:bg-white hover:text-black transition-all group">
          <div class="flex justify-between items-center">
            <h3 class="font-bold text-xl uppercase tracking-tighter">Service 0{{ i }}</h3>
            <span class="text-2xl group-hover:translate-x-2 transition-transform">→</span>
          </div>
        </div>
      </div>
    </AppContainer>
  </section>
</template>
