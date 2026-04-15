// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Scopedrone',
            titleTemplate: '%s | Profesjonalne Ujęcia z Powietrza',
            htmlAttrs: {
                lang: 'pl',
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'author', content: 'Krzysztof Brzostek' },
                { name: 'description', content: 'Profesjonalne ujęcia z powietrza dronem. Odkryj potencjał nieruchomości, inwestycji i krajobrazów z zupełnie nowej perspektywy.' },
                { property: 'og:site_name', content: 'Scopedrone' },
                { property: 'og:type', content: 'website' },
            ],
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
