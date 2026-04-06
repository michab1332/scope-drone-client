// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'ScopeDrone', // default fallback title
            htmlAttrs: {
                lang: 'pl',
            },
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            ],
        },
    },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Inter: [400, 700, 900],
    },
    display: 'swap', // Zapobiega miganiu tekstu przy ładowaniu
    download: true   // Pobiera czcionki na Twój serwer (najlepiej dla SEO i szybkości)
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  eslint: {
    config: {
      stylistic: true // Włącza nowoczesne, czyste reguły stylistyczne
    }
  }
})
