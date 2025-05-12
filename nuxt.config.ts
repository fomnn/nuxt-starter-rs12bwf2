import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
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
});
