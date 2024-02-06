import { defineConfig } from "vite";
import { VitePWA as pwa } from "vite-plugin-pwa";
import manifest from "./manifest.json";
import unplugin from 'unplugin-vue-components/vite';
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue(),
    pwa({
      strategies: "injectManifest",
      srcDir: "",
      filename: "service-worker.js",
      manifest,
    }),
    unplugin()
  ],
});
