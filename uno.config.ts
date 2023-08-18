import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
  defineConfig,
} from "unocss";
import { rules, shortcuts } from "./unocss/configs";
import { hoverIconList } from "./src/utils/inlineClasses";
export default defineConfig({
  rules,
  shortcuts,
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      // 用于按需加载，参考：https://unocss.dev/presets/icons#bundler
      collections: {
        carbon: () => import("@iconify-json/carbon/icons.json", {
          assert: { type: "json" }
        }).then(i => i.default),
        mdi: () => import("@iconify-json/mdi/icons.json", {
          assert: { type: "json" }
        }).then(i => i.default),
        ep: () => import("@iconify-json/ep/icons.json", {
          assert: { type: "json" }
        }).then(i => i.default),
      },
      customizations: {
        iconCustomizer(collection, icon, props) {
          props.width = "1em";
          props.height = "1em";
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
  content: {
    inline: [
      () => hoverIconList.map(item => `${item} group-hover:${item} [&.is-active_i]:${item}`).join(" ")
    ],
    pipeline: {
      include: [
        // 我把md移除了
        /\.(vue|svelte|[jt]sx|astro|elm|php|phtml|html)($|\?)/,
        // 这里只写我需要的，当然你也可以定制，参考：https://unocss.dev/guide/extracting#extracting-from-build-tools-pipeline
        // "src/router/index.ts",
      ],
      // exclude files
      // exclude: []
    }
  }
});
