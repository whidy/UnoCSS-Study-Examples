## Pure CSS Icons - use any icon as a single class.

> 这也是一个内置预设，但需要结合一些第三方的ICON库，官方推荐的是[Iconify](https://iconify.design/)，使用起来也比较简单。

由于官方文档写的很详细了，所以我这里只抽出一部分重点进行简单的介绍。

> 作者关于纯CSS图标的初期的想法，强烈建议阅读[《聊聊纯 CSS 图标》](https://antfu.me/posts/icons-in-pure-css-zh)

当然你想快速上手的话，你先在UnoCSS的config中配好如下：

```js
// uno.config.ts
import { defineConfig } from "unocss";
import { presetIcons } from "@unocss";

export default defineConfig({
  presets: [
    presetIcons({
      /* options */
    }),
    // ...other presets
  ],
});
```

接着使用上面提到的 `Iconify` 图库中的某个需要的集合（Collection），这里推荐的常用集合分别是：**Carbon**, **Material Design Icons**, **Element Plus**。另外这里还有个查找Icon的站点，可以说是更方便一些，就是[Icônes](https://icones.js.org/)，你完全可以用这个替代 `Iconify` 使用，至于有哪些优势，大家自行上[Icônes Feature](https://github.com/antfu/icones#features)查阅。

假设你现在要用 `Carbon` ，那么对应的图集链接是：<https://icones.js.org/collection/carbon>。那么请安装依赖（这里以pnpm示例）：

```
pnpm add -D @unocss/preset-icons @iconify-json/carbon
```

接下来就可以在项目中使用了，比如：

```html
<ul flex flex-col p-0 rainbow-content space-y-4>
  <li flex items-center space-x-2>
    <a href="https://icones.js.org/collection/carbon">Carbon:</a
    ><span i-carbon:linux-alt text-blue dark:text-emerald></span
    ><span i-carbon:fingerprint-recognition rainbow-text></span
    ><span i-carbon:face-dizzy-filled text-red dark:text-orange></span>
  </li>
</ul>
```

这段代码，在右侧**演示效果一**中的Carbon中有所展现。

### 动态加载icon

截至目前，
