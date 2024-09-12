// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  axios: {
    baseURL: 'https://genesisapi.popmanteau.com/api/v1', // API base URL
  },

  devtools: {
    enabled: true,
  },
})
