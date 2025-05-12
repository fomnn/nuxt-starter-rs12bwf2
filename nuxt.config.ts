import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-04-12',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  modules: ['nuxt-auth-utils', '@nuxt/eslint'],

  css: ['~/assets/css/main.css'],

  eslint: {
    config: {
      standalone: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
})
