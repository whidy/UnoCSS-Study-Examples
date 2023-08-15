## Compilation mode - synthesizes multiple classes into one at build time.

> 同样的我也不知道这个怎么翻译好，就直译了，我想过混淆模式、类名混淆感觉都不好，咱还是不纠结了。其实就是在编译过程中，将一组UnoCSS的类名转换成一个定制已某字符串为前缀的一串特殊的类名。

这个功能或许在某些特殊的场景下有用，虽然我还没想到真正的场景（或许是为了html字符串减少的性能提升？还是不想让别人知道咱用了原子类CSS的能力），那也不妨碍我进行介绍吧。

首先依照惯例，UnoCSS配置一下：

```js
// uno.config.ts
import { defineConfig, transformerCompileClass } from "unocss";

export default defineConfig({
  // ...
  transformers: [transformerCompileClass()],
});
```

默认情况下你在需要混淆组合成为一个class名的DOM上的class内添加 `:uno:` 前缀即可。效果如下：

```html
<div class=":uno: text-center sm:text-left">
  <div class=":uno: text-sm font-bold hover:text-red" />
</div>
```

将被转换成为：

```html
<div class="uno-qlmcrp">
  <div class="uno-0qw2gr" />
</div>
```

```css
.uno-qlmcrp {
  text-align: center;
}
.uno-0qw2gr {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
}
.uno-0qw2gr:hover {
  --un-text-opacity: 1;
  color: rgba(248, 113, 113, var(--un-text-opacity));
}
@media (min-width: 640px) {
  .uno-qlmcrp {
    text-align: left;
  }
}
```

如果你在DOM的class中前面不想用 `:uno:` 这个前缀，换成 `@X` ，并且转换后的class名称不希望以 `uno-` 开头，比如换成 `hi-` ，那你就要设置一下：

```js
// uno.config.ts
import { defineConfig, transformerCompileClass } from "unocss";

export default defineConfig({
  // ...
  transformers: [
    transformerCompileClass({
      trigger: /(["'`])@X(?<name>[^\s\1]+)?\s([^\1]*?)\1/g, // 随便写的，可能不够严谨，按照你自己需要调整。
      classPrefix: "hi-",
    }),
  ],
});
```

上面这个可以参考[Playground](https://unocss.dev/play/?html=DwEwlgbgBAxgNgQwM5ILwCIACANKBbATwFoAOKAFwFMAPcomSgOyoCcKa6AjOAV0qhAIWAawBcVWkRaUQ6AHwBJKABkA9hH4B1ABZgQBYAHpwEOUA&config=JYWwDg9gTgLgBAbwFBzmKBTAzhmBBGGKYAIwFcZgAzATwBoU1McYBJAYwgDssHV1suAKpcIfOEQCGPKtBAYoAEWCZ2lAG7ZxUmXIUA1ScWkwA4lAhkw2qNKyyo8qAGEI4YABsMzj5Ky9GABMMKmAub25QgHMGAF84KgsQOAAiMlF2fxSAbiRQSFhECQgAUSx2STAMQIBlDC81aDh4xLc4AHJ0iEysdqQMAA8C%2BGCqSTIPEZCwiK5ogApkVCgJ7AAuOABtAF1xARYsDc3GfmZhUXmASnFTwXxCYnJKWiubpjuObixFk9Q4cskXg2AEYAHQAJjeqHYgS4G3aAAtCGBDgB6VHYECgrAI1HtN6xa6MXaMHT2PRQQ5bMkOJzKVQabCvCS2XSOAxGYAmcyWMDMmkU1zuLw%2BPzfJZ-IjAKJRBQbVHzTYpdoAA22lwAAgANeYAfgAPFxJPIAHybAB6AB0sJbgdsANSXXXWxVWu0AKl1l1tqJiv3Yvn8AAVMKEBvCEcAALR9VCEkmEpBAA&css=Q&options=N4IgLgTghgdgzgMwPYQLYgFwKgGzgUwF8g)，看下具体的配置和output代码。

当然最好还是看[官方文档 - CompileClassOptions](https://github.com/unocss/unocss/blob/main/packages/transformer-compile-class/src/index.ts#L4)
