<script setup lang="ts">
import { ref, onMounted } from 'vue'

/**
 * About Component
 * Features:
 * - Left-side profile image with "Certified" badge (Blue - as requested)
 * - Professional bio with Green accents (Consistent with site)
 * - List of key advantages with custom Green checkmarks
 */

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      isVisible.value = true
      observer.disconnect()
    }
  }, { threshold: 0.1 })

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

const features = [
  'Licencja i ubezpieczenie OC',
  'Profesjonalny montaż i korekcja barwna',
  'Szybki czas realizacji materiałów'
]
</script>

<template>
  <section
    id="about"
    ref="sectionRef"
    class="py-24 border-b border-gray-900 bg-black relative overflow-hidden"
  >
    <AppContainer>
      <div class="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
        
        <!-- Profile Image Column -->
        <div 
          class="flex-1 relative transition-all duration-1000 transform"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'"
        >
          <div class="relative rounded-3xl overflow-hidden border border-gray-800 shadow-2xl group">
            <NuxtImg 
              src="/assets/images/krzys.jpg" 
              alt="Krzysztof Brzostek - Scopedrone Pilot i certyfikowany operator UAV"
              class="w-full h-auto transition-all duration-700 object-cover"
              loading="lazy"
              format="webp"
              quality="90"
            />
            <!-- Certification Badge (Blue - Kept as requested) -->
            <div 
              class="absolute bottom-6 left-6 right-6 bg-blue-600/90 backdrop-blur-md px-6 py-4 rounded-2xl flex items-center gap-4 border border-blue-400/30 shadow-[0_10px_30px_rgba(37,99,235,0.4)]"
            >
              <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-2.06 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946 2.06 3.42 3.42 0 013.593 3.593 3.42 3.42 0 002.06 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-2.06 1.946 3.42 3.42 0 01-3.593 3.593 3.42 3.42 0 00-1.946 2.06 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-2.06 3.42 3.42 0 01-3.593-3.593 3.42 3.42 0 00-2.06-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 002.06-1.946 3.42 3.42 0 013.593-3.593z" />
                </svg>
              </div>
              <div>
                <span class="block text-xs text-blue-100 uppercase tracking-widest font-bold">Certyfikowany</span>
                <span class="block text-white font-bold leading-tight uppercase tracking-tighter">Pilot Drona (UAV)</span>
              </div>
            </div>
          </div>
          
          <!-- Background accent for the image -->
          <div class="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
        </div>

        <!-- Bio Content Column -->
        <div 
          class="flex-1 transition-all duration-1000 delay-300 transform"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'"
        >
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-[1px] bg-primary" />
            <span class="text-primary text-sm font-bold uppercase tracking-[0.3em]">Okiem profesjonalisty</span>
          </div>
          
          <h2 class="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-8">
            Krzysztof <br/> Brzostek
          </h2>
          
          <div class="space-y-6 text-gray-400 text-lg font-light leading-relaxed text-balance">
            <p>
              Specjalizuję się w dostarczaniu najwyższej jakości materiałów foto i wideo z powietrza. Działam głównie na terenie <span class="text-white font-medium">Warmii i Mazur</span> – regionu, który z perspektywy drona ukazuje swoje pełne, zachwycające oblicze.
            </p>
            <p>
              Wykorzystuję nowoczesny sprzęt pozwalający na rejestrację obrazu w rozdzielczości <span class="text-primary font-bold tracking-widest">4K</span>. Każde zlecenie traktuję indywidualnie, dbając o odpowiednie światło, kadr i płynność ujęć, aby finalny materiał stanowił potężne narzędzie marketingowe.
            </p>
          </div>

          <!-- Feature List -->
          <div class="mt-12 space-y-4">
            <div 
              v-for="(feature, index) in features" 
              :key="index"
              class="flex items-center gap-4 group"
            >
              <div class="w-6 h-6 rounded-full border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="text-white font-medium tracking-tight">{{ feature }}</span>
            </div>
          </div>
        </div>

      </div>
    </AppContainer>
  </section>
</template>

<style scoped>
/* Profile image hover depth */
img {
  transition: transform 1.5s cubic-bezier(0.2, 1, 0.3, 1);
}
.group:hover img {
  transform: scale(1.05);
}
</style>
