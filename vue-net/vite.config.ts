import Components from "unplugin-vue-components/vite";
import UnoCSS from "unocss/vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    watch: {
      usePolling: true,
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    UnoCSS(),
    // Components({
    //   dts: "src/@types/auto-components.d.ts",
    //   dirs: ["src/widgets"],
    // }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
