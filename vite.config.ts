import react from "@vitejs/plugin-react";
import path from "path";

import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiled: "./src/tests/setup.ts",
  },
  resolve: {
    alias: {
      "🚀": path.resolve(__dirname, "./src/components"),
      "🕹️": path.resolve(__dirname, "./src/providers"),
      "🔥": path.resolve(__dirname, "./src/elements"),
      "🍄": path.resolve(__dirname, "./src/atoms"),
      "🔩": path.resolve(__dirname, "./src/types"),
      "📦": path.resolve(__dirname, "./src/store"),
      "🪝": path.resolve(__dirname, "./src/hooks"),
      "💊": path.resolve(__dirname, "./src/hoc"),
      "📖": path.resolve(__dirname, "./src/lib"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
