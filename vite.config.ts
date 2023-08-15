import path from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Markdown from "vite-plugin-vue-markdown";
import Inspect from "vite-plugin-inspect";
import UnoCSS from "unocss/vite";
import MarkdownItPrism from "markdown-it-prism";
const pathSrc = path.resolve(__dirname, "src");

export default defineConfig({
  resolve: {
    alias: {
      "@": pathSrc,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      markdownItSetup(md) {
        md.use(MarkdownItPrism);
      },
    }),
    AutoImport({
      imports: ["vue"],
      resolvers: [ElementPlusResolver()],
      dts: path.resolve(pathSrc, "typings", "auto-imports.d.ts"),
    }),
    Components({
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/],
      resolvers: [ElementPlusResolver()],
      dts: path.resolve(pathSrc, "typings", "components.d.ts"),
    }),
    UnoCSS(),
    Inspect(),
  ],
  server: {
    port: 3002,
  },
});
