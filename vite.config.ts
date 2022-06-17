import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Markdown from 'vite-plugin-md'
import Inspect from 'vite-plugin-inspect'
import { toEscapedSelector as e } from 'unocss'
import Unocss from 'unocss/vite'
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

const pathSrc = path.resolve(__dirname, 'src')

export default defineConfig({
  resolve: {
    alias: {
      '@': pathSrc,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      markdownItSetup(md) {
        md.use(require('markdown-it-prism'))
      },
    }),
    AutoImport({
      imports: ['vue'],
      resolvers: [ElementPlusResolver()],
      dts: path.resolve(pathSrc, 'typings', 'auto-imports.d.ts'),
    }),
    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      resolvers: [ElementPlusResolver()],
      dts: path.resolve(pathSrc, 'typings', 'components.d.ts'),
    }),

    Unocss({
      rules: [
        [/^(whidy)-(\d+)$/, ([, name, count], { rawSelector, currentSelector, variantHandlers, theme }) => {
          const selector = e(rawSelector)
          // console.log(theme);
          // console.log({match, selector, rawSelector, currentSelector, variantHandlers});
          //  @apply的末尾忘记写分号会导致编译报错，开发环境不会报错。错误信息大致是：js-unocss-hash.css:5:34: Unknown word
          return `
${selector} {
position: relative;
cursor: pointer;
@apply border-l-2 pl-2 b-pink-2;
}
${selector}::after {
content: "${name.repeat(count)}";
font-size: 1.5em;
position: absolute;
top: 0.25em;
left: 0.5em;
color: ${theme.colors.pink[2]};
}
${selector}:hover::after {
  color: ${theme.colors.pink[4]};
}
`
        }, {
            layer: 'whidy'
          }],
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
              props.width = '2em'
              props.height = '2em'
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
})
