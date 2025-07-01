import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  base: "/base-conversor/",
  build: {
    outDir: "dist",
    emptyOutDir: true
  }
});