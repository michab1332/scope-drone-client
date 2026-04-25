<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'

/**
 * Contact Component
 * Features:
 * - Dynamic Spotlight effect (Radial Gradient)
 * - Intersection Observer for entrance animation
 * - Responsive Grid Layout
 * - Styled custom inputs
 */

const sectionRef = ref<HTMLElement | null>(null)
const formRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

// Mouse position for Spotlight effect
const mousePosition = reactive({ x: 0, y: 0 })
const isHovering = ref(false)

const handleMouseMove = (e: MouseEvent) => {
  if (!formRef.value) return
  const rect = formRef.value.getBoundingClientRect()
  mousePosition.x = e.clientX - rect.left
  mousePosition.y = e.clientY - rect.top
}

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

// Form State
const form = reactive({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const handleSubmit = async () => {
  isSubmitting.value = true
  // Integracja z backendem w przyszłości
  console.log('Form data:', form)
  setTimeout(() => {
    isSubmitting.value = false
    alert('Wiadomość została wysłana (demo)')
    form.name = ''
    form.email = ''
    form.message = ''
  }, 1000)
}
</script>

<template>
  <section
    id="contact"
    ref="sectionRef"
    class="py-24 md:py-40 bg-black relative overflow-hidden border-t border-gray-900"
  >
    <AppContainer>
      <div class="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        <!-- Text Content -->
        <div 
          class="flex-1 transition-all duration-1000 transform"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
        >
          <div class="flex items-center gap-4 mb-8">
            <div class="w-12 h-[1px] bg-[#00E275]" />
            <span class="text-[#00E275] text-sm font-bold uppercase tracking-[0.3em]">Kontakt</span>
          </div>
          
          <h2 class="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
            Gotowy na ujęcia <br/> 
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              z innej perspektywy?
            </span>
          </h2>
          
          <p class="text-gray-400 text-xl font-light leading-relaxed max-w-lg mb-12">
            Napisz wiadomość (DM), aby omówić szczegóły współpracy i otrzymać bezpłatną wycenę dla Twojego projektu.
          </p>

          <!-- Contact Details -->
          <div class="space-y-6">
            <a href="mailto:scopedrone.kb@gmail.com" class="group flex items-center gap-4 text-white hover:text-[#00E275] transition-colors duration-300">
              <div class="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-[#00E275]/50 group-hover:bg-[#00E275]/5 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="flex flex-col">
                <span class="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Napisz do nas</span>
                <span class="font-medium tracking-tight">scopedrone.kb@gmail.com</span>
              </div>
            </a>

            <div class="flex flex-col gap-4 pt-4 border-t border-gray-900">
              <a 
                href="https://www.instagram.com/scopedrone_kb" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="group flex items-center gap-4 text-white hover:text-[#00E275] transition-colors duration-300"
              >
                <div class="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-[#00E275]/50 group-hover:bg-[#00E275]/5 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </div>
                <span class="text-sm font-medium tracking-tight">Instagram</span>
              </a>

              <a 
                href="https://www.facebook.com/profile.php?id=61580575165689" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="group flex items-center gap-4 text-white hover:text-[#00E275] transition-colors duration-300"
              >
                <div class="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-[#00E275]/50 group-hover:bg-[#00E275]/5 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </div>
                <span class="text-sm font-medium tracking-tight">Facebook</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Form Column -->
        <div 
          class="flex-1 w-full transition-all duration-1000 delay-300 transform"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
        >
          <div 
            ref="formRef"
            @mousemove="handleMouseMove"
            @mouseenter="isHovering = true"
            @mouseleave="isHovering = false"
            class="relative group bg-gray-950/50 border border-gray-800 rounded-3xl p-8 md:p-12 overflow-hidden transition-colors duration-500 hover:border-gray-700"
          >
            <!-- Spotlight Effect -->
            <div 
              class="pointer-events-none absolute -inset-px transition-opacity duration-500"
              :class="isHovering ? 'opacity-100' : 'opacity-0'"
              :style="{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 226, 117, 0.08), transparent 80%)`
              }"
            />

            <form @submit.prevent="handleSubmit" class="relative z-10 space-y-8">
              <!-- Name Input -->
              <div class="space-y-2">
                <label class="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">Imię i Nazwisko</label>
                <input 
                  v-model="form.name"
                  type="text" 
                  placeholder="np. Jan Kowalski"
                  required
                  class="w-full bg-black/40 border border-gray-800 rounded-xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#00E275] focus:ring-1 focus:ring-[#00E275]/20 transition-all duration-300"
                >
              </div>

              <!-- Email Input -->
              <div class="space-y-2">
                <label class="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">Adres E-mail</label>
                <input 
                  v-model="form.email"
                  type="email" 
                  placeholder="twoj@email.com"
                  required
                  class="w-full bg-black/40 border border-gray-800 rounded-xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#00E275] focus:ring-1 focus:ring-[#00E275]/20 transition-all duration-300"
                >
              </div>

              <!-- Message Input -->
              <div class="space-y-2">
                <label class="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">Opis projektu</label>
                <textarea 
                  v-model="form.message"
                  rows="4"
                  placeholder="Opisz krótko czego potrzebujesz..."
                  required
                  class="w-full bg-black/40 border border-gray-800 rounded-xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#00E275] focus:ring-1 focus:ring-[#00E275]/20 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button 
                type="submit"
                :disabled="isSubmitting"
                class="w-full group relative flex items-center justify-center gap-3 bg-white text-black font-bold uppercase tracking-widest py-5 rounded-xl overflow-hidden transition-all duration-300 hover:bg-[#00E275] active:scale-[0.98] disabled:opacity-50"
              >
                <span v-if="!isSubmitting">Wyślij wiadomość</span>
                <span v-else>Wysyłanie...</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>

      </div>
    </AppContainer>

    <!-- Background Decoration -->
    <div class="absolute -right-20 top-1/4 w-96 h-96 bg-[#00E275]/5 blur-[120px] rounded-full pointer-events-none" />
    <div class="absolute -left-20 bottom-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
  </section>
</template>

<style scoped>
/* Custom focus ring shadow */
input:focus, textarea:focus {
  box-shadow: 0 0 20px rgba(0, 226, 117, 0.05);
}
</style>
