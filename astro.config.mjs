// @ts-check
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://abjportfolio.netlify.app",
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
