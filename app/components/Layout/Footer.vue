<template>
  <footer class="border-t border-gray-800 py-12 md:py-24 text-sm text-gray-600 bg-black mt-auto">
    <AppContainer>
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div class="flex flex-col gap-4">
          <SharedIcon />
          <p class="max-w-xs text-gray-500 font-sans text-[10px] uppercase tracking-widest leading-loose font-bold">
            Professional drone services for your business. Quality and precision in every frame.
          </p>
          <div class="text-xs text-gray-800 mt-4">© {{ new Date().getFullYear() }} Scopedrone. All Rights Reserved.</div>
        </div>
        
        <div class="grid grid-cols-2 gap-12 md:gap-24">
          <div class="flex flex-col gap-4 uppercase tracking-[0.2em] text-[10px] font-bold">
            <span class="text-gray-400">Navigation</span>
            <nav class="flex flex-col gap-2">
              <a href="#" class="hover:text-white transition-colors">Home</a>
              <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
            </nav>
          </div>
          <div class="flex flex-col gap-4 uppercase tracking-[0.2em] text-[10px] font-bold">
            <span class="text-gray-400">Socials</span>
            <nav class="flex flex-col gap-2">
              <a href="#" class="hover:text-white transition-colors">Instagram</a>
              <a href="#" class="hover:text-white transition-colors">Facebook</a>
            </nav>
          </div>
        </div>
      </div>
    </AppContainer>
  </footer>
</template>

<script setup lang="ts">
/**
 * Global Footer Component
 */
</script>
