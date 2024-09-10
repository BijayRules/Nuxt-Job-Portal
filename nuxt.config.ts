// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-tiptap-editor',
  ],
  tiptap: {
    prefix: 'Tiptap', //prefix for Tiptap imports, composables not included
  },

  devtools: {
    enabled: true,
  },
})
