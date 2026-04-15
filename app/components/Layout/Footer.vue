<template>
  <footer class="border-t border-gray-800 py-12 md:py-24 text-sm text-gray-600 bg-black mt-auto">
    <AppContainer>
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div class="flex flex-col gap-4">
          <SharedIcon />
          <p class="max-w-xs text-gray-500 font-sans text-[10px] uppercase tracking-widest leading-loose font-bold">
            Profesjonalne usługi dronami dla Twojego biznesu. Jakość i precyzja w każdym kadrze.
          </p>
          <div class="text-xs text-gray-800 mt-4 italic">
            © {{ new Date().getFullYear() }} Scopedrone. Wszelkie prawa zastrzeżone.
          </div>
        </div>
        
        <div class="grid grid-cols-2 gap-12 md:gap-24">
          <!-- Sekcja Regulaminy & Nawigacja -->
          <div class="flex flex-col gap-4 uppercase tracking-[0.2em] text-[10px] font-bold">
            <span class="text-gray-400">Regulaminy</span>
            <nav class="flex flex-col gap-2" aria-label="Legal links">
              <NuxtLink to="#" class="hover:text-white transition-colors">Polityka prywatności</NuxtLink>
              <NuxtLink to="#" class="hover:text-white transition-colors">Regulamin</NuxtLink>
            </nav>
          </div>

          <!-- Sekcja Social Media -->
          <div class="flex flex-col gap-4 uppercase tracking-[0.2em] text-[10px] font-bold">
            <span class="text-gray-400">Social Media</span>
            <nav class="flex flex-col gap-2" aria-label="Social media links">
              <a 
                href="https://www.instagram.com/scopedrone_kb" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61580575165689" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="hover:text-white transition-colors"
              >
                Facebook
              </a>
            </nav>
          </div>
        </div>
      </div>
    </AppContainer>
  </footer>
</template>

<script setup lang="ts">
/**
 * Footer
 */
</script>
