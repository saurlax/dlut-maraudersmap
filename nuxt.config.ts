// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "nuxt-maplibre"],
  runtimeConfig: {
    public: {
      maptilerKey: process.env.MAPTLER_KEY,
    },
  },
  ssr: false,
  vite: {
    optimizeDeps: {
      include: ["maplibre-gl"],
    },
  },
  ui: {
    fonts: false,
  },
});
