import { defineConfig } from "vite";

import path, { resolve } from "path";

export default defineConfig({
  build: {
    outDir: "public",

    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        fetch: resolve(__dirname, "thankyou.html")
      }
    }
  },

  base: "./",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "assets"),
    },
  },
});
