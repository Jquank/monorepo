import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { commonConfig, elementPlugin } from "../../vite.base.config";
// https://vitejs.dev/config/
export default defineConfig({
  ...commonConfig,
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ["micro-app"].includes(tag),
        },
      },
    }),
    ...elementPlugin,
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 5000,
  },
});
