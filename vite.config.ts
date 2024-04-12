import { resolve } from "path";
import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue2-jsx";
import postcssNesting from "postcss-nesting";

export default defineConfig({
  plugins: [vueJsx()],
  server: { port: 5678 },
  css: {
    postcss: {
      plugins: [postcssNesting],
    },
  },
  resolve: { alias: { "~": resolve(__dirname, "./src") } },
});
