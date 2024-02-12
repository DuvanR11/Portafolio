import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  base: "/",
  site: "https://devduvan.tech/",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es", 
        locales: {
          en: "en",
          es: "es",
        },
      },
    }),
    astroI18next(),
  ],
  trailingSlash: "never",
});
