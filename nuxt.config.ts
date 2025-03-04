// nuxt.config.ts
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      // Using DummyJSON API as the data source
      dummyJsonApi: "https://dummyjson.com",
    },
  },
  // Enable reactivity in the global fetch API
  experimental: {
    reactivityTransform: true,
  },
});
