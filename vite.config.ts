
import path from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Markdown from "vite-plugin-vue-markdown";
import Inspect from "vite-plugin-inspect";
import Unocss from "unocss/vite";
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import { rules, shortcuts } from "./unocss/configs";
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

    Unocss({
      rules,
      shortcuts,
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          // collections: {
          //   carbon: () => import('@iconify-json/carbon/icons.json', {
          //     assert: { type: 'json' }
          //   }).then(i => i.default),
          //   mdi: () => import('@iconify-json/mdi/icons.json', {
          //     assert: { type: 'json' }
          //   }).then(i => i.default),
          // },
          customizations: {
            iconCustomizer(collection, icon, props) {
              props.width = "2em";
              props.height = "2em";
            },
            // customize(props) { // does not work
            //   props.width = '5.2em'
            //   props.height = '2em'
            //   return props
            // }
          }
        }),
      ],
      transformers: [transformerDirectives(), transformerVariantGroup()],
    }),
    Inspect(),
  ],
  server: {
    port: 3002,
  }
});
