// @ts-check
import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://abjportfolio.netlify.app",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
});
