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

截至目前，我依然没有找到好的解决办法。比如该项目示例的左侧菜单本来是有icon的。当然这个icon被我配置到路由了，却没有正常加载出来。

因此我开始寻找比我之前写的一篇文章后更好的方案，不过没有什么好的发现，并且还发现了一个新的问题。就是group的情况下，即便提前“声明”了对应的icon的完整名称，依然不能生效。

所以，你可以看到我这个项目的示例中，在文件 `src/components/VMenu.vue` 顶部，添加了一长串icon的定义。并且有些定义名称是 `group-hover:i-carbon-notebook-reference` ，否则也无法被正常使用。

> 另外要特别说明的是：有时候本地开发的效果和实际生产有所区别，在icon上，因为本地开发存在icon缓存，所以你始终要以生产结果为准。而且本地解析模式和生产构建时也存在一些区别。比如本地我曾尝试通过onMounted来追加icon的class，竟然有效，但生产环境是不起作用的，所以要特别注意。

至于为什么动态加载icon，一直无法很好的解决，可能，本来这个需求场景就是违背UnoCSS的ICON的设计的。其次，或许有人在Vite集成的rollup中做一些改造也能实现，然而，再往复杂点，就成了新的服务端生成之类了。我想也没有实际价值了，故而，关于这个研究，或许是我走错了方向，或许我太菜了。
