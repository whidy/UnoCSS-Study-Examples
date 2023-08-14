## Variant Groups - shorthand for group utils with common prefixes.

> 这是继承了 `Windi CSS` 的能力，一种特殊的组合写法。

我实在不知道这个 **Variant Groups** 该如何翻译，不过好在功能比较好理解。咱就不纠结了吧。

因为太好理解了，所以这里就简单放一下代码示例就好。

首先依照惯例，UnoCSS配置一下：

```js
// uno.config.ts
import { defineConfig } from "unocss";
import transformerVariantGroup from "@unocss/transformer-variant-group";

export default defineConfig({
  // ...
  transformers: [transformerVariantGroup()],
});
```

接着代码就可以直接用了。

```html
<div class="hover:(bg-gray-400 font-medium) font-(light mono)" />
```

将被转换成

```html
<div class="hover:bg-gray-400 hover:font-medium font-light font-mono" />
```

其实我更期待，有工具能自动将 `xxx:a xxx:b xxx:c` 转换成 `xxx:(a b c)` ，这样代码看起来确实会简洁许多，而且也更清晰了。
