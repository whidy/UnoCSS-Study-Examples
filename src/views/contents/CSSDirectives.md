## CSS Directives - reuse utils in CSS with @apply directive.

> 这个CSS指令转换器，就比较常见了，SASS大家都写过，@mixin，@include什么的都算CSS指令。因为我以前是用TailwindCSS，所以也很好理解了。这里最常用的就是 `@apply` 指令。

首先依照惯例，UnoCSS配置一下：

```js
// uno.config.ts
import { defineConfig, transformerDirectives } from "unocss";

export default defineConfig({
  // ...
  transformers: [transformerDirectives()],
});
```

这个具体怎么用呢？这个就像是将内置的一些规则组合起来用于你自己定制的class。比如：

```css
.custom-div {
  @apply text-center my-0 font-medium;
}
```

会被转换成：

```css
.custom-div {
  margin-top: 0rem;
  margin-bottom: 0rem;
  text-align: center;
  font-weight: 500;
}
```

如果使用在纯CSS文件中，则应该将 `@apply` 更换成 `--at-apply` ，一些写法示例：

```css
.custom-div {
  --at-apply: text-center my-0 font-medium;
}
```

```css
.custom-div {
  --at-apply: "hover:text-red";
}
```

还有一些其他的指令，例如：[@screen](https://unocss.dev/transformers/directives#screen)、[theme()](https://unocss.dev/transformers/directives#theme)，你们自己去官网看吧hhh。
