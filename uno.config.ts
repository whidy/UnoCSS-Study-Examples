import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
  defineConfig,
} from "unocss";
import { rules, shortcuts } from "./unocss/configs";
export default defineConfig({
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
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
