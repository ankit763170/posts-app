export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],

  pinia: {
    autoImports: ["defineStore", "storeToRefs"],
  },

  compatibilityDate: "2025-03-04",
});