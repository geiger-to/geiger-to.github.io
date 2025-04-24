import * as path from "path";
import { defineConfig } from "vitest/config";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },
  build: {
    commonjsOptions: {
      include: [/@geiger-to-ui/, /node_modules/],
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: __dirname }],
  },
  server: {
    port: 5315,
  },
  preview: {
    port: 53155,
  },
});
