import path from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Markdown from "vite-plugin-vue-markdown";
import Inspect from "vite-plugin-inspect";
import { toEscapedSelector as e } from "unocss";
import Unocss from "unocss/vite";
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
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
      rules: [
        [/^name-(.+)-(\d+)$/, ([, name, count], { rawSelector, currentSelector, variantHandlers, theme }) => {
          const selector = e(rawSelector);
          // console.log(theme);
          // console.log({match, selector, rawSelector, currentSelector, variantHandlers});
          //  @apply的末尾忘记写分号会导致编译报错，开发环境不会报错。错误信息大致是：js-unocss-hash.css:5:34: Unknown word
          return `
${selector} {
position: relative;
cursor: pointer;
@apply border-l-2 pl-2 b-pink-2 mb-4;
}
${selector}::after {
content: "${name.concat("~").repeat(count)}";
font-size: 1.5em;
position: absolute;
top: 0;
left: 0;
transform: translate(20%, 0%);
color: ${theme.colors.pink[2]};
}
${selector}:hover::after {
  color: ${theme.colors.pink[4]};
}
`;
        }, {
            layer: "whidy"
          }],
      ],
      shortcuts: [
        {
          "gradient-header": "text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent",
        },
        [
          /^gradient-(\w+)-(\w+)$/, ([, colorFrom, colorTo]) => `bg-gradient-to-r from-${colorFrom}-400 to-${colorTo}-500  bg-clip-text text-transparent`
        ]
      ],
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
});
