<script setup lang="ts">
/**
 * Prawdziwy "Fixed" Navbar - Gwarantowana widoczność przy przewijaniu
 */
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

// Blokada przewijania
watch(isMenuOpen, (val) => {
  if (process.client) {
    if (val) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }
})

const navLinks = [
  { name: 'Zalety', to: '#advantages' },
  { name: 'Usługi', to: '#services' },
  { name: 'O nas', to: '#about' },
  { name: 'Kontakt', to: '#contact' }
]
</script>

<template>
  <!-- 
    Zmieniono na fixed top-0 left-0. 
    Teraz nagłówek jest "przyklejony" do okna przeglądarki, a nie do kontenera.
  -->
  <header 
    class="fixed top-0 left-0 w-full py-4 z-[200] border-b transition-all duration-300"
    :class="[
      isMenuOpen ? 'border-transparent bg-transparent' : 'border-gray-800 bg-black/90 backdrop-blur-md'
    ]"
  >
    <AppContainer class="flex justify-between items-center relative">
      <!-- Logo Komponent -->
      <SharedIcon @click="closeMenu" />

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex gap-8 text-xs md:text-sm text-gray-400 font-sans uppercase tracking-widest font-bold">
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.to" 
          :to="link.to" 
          class="hover:text-white transition-colors"
        >
          {{ link.name }}
        </NuxtLink>
      </nav>

      <!-- Burger Button -->
      <button 
        type="button"
        class="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-[210]" 
        @click="toggleMenu"
      >
        <div class="relative w-6 h-5">
          <span 
            class="absolute left-0 w-full h-px bg-white transition-all duration-300" 
            :class="isMenuOpen ? 'top-2 rotate-45' : 'top-0'"
          />
          <span 
            class="absolute left-0 top-2 w-full h-px bg-white transition-all duration-300" 
            :class="{ 'opacity-0': isMenuOpen }"
          />
          <span 
            class="absolute left-0 w-full h-px bg-white transition-all duration-300" 
            :class="isMenuOpen ? 'top-2 -rotate-45' : 'top-4'"
          />
        </div>
      </button>
    </AppContainer>
  </header>

  <!-- Mobile Menu Overlay -->
  <Transition
    enter-active-class="transition duration-500 ease-in-out"
    enter-from-class="opacity-0 translate-x-full"
    enter-to-class="opacity-100 translate-x-0"
    leave-active-class="transition duration-300 ease-in-out"
    leave-from-class="opacity-100 translate-x-0"
    leave-to-class="opacity-0 translate-x-full"
  >
    <div 
      v-if="isMenuOpen" 
      class="fixed inset-0 bg-black z-[100] flex flex-col w-full h-screen"
    >
      <div class="flex flex-col h-full pt-32 px-8 overflow-y-auto">
        <nav class="flex flex-col gap-8">
          <NuxtLink 
            v-for="(link, index) in navLinks" 
            :key="link.to" 
            :to="link.to" 
            class="text-5xl font-black uppercase tracking-tighter text-white border-b border-gray-900 pb-6 flex justify-between items-end"
            @click="closeMenu"
          >
            <span>{{ link.name }}</span>
            <span class="text-[10px] text-gray-700 font-sans mb-2 tracking-widest">0{{ index + 1 }} / 04</span>
          </NuxtLink>
        </nav>
        
        <div class="mt-auto py-12">
          <p class="text-[10px] text-gray-700 font-sans uppercase tracking-[0.4em] font-bold">
            Scopedrone — Systemy Bezzałogowe
          </p>
          <div class="h-px w-full bg-gray-900 mt-4" />
        </div>
      </div>
    </div>
  </Transition>
</template>
