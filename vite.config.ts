import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  base: "/base-converter/",
  build: {
    outDir: "dist",
    emptyOutDir: true
  }
});