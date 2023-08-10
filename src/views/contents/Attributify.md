## Attributify mode - group utilities in attributes.

> 其实不用写 `class="xxx"` ，也是可以的，这是一个 `UnoCSS` 内置的预设，你完全可以直接将 CSS 原子类以 HTML 的 Attribute 名称来写，当然这并不是他的最主要目的，最主要的目的突出的是 `Group` 。

这个预设是内置的，所以按照文档[Attributify preset](https://unocss.dev/presets/attributify)，在配置文件中添加即可。

先举一个简单的例子：

```html
<button
  class="bg-blue-400 hover:bg-blue-500 text-sm text-white font-mono font-light py-2 px-4 rounded border-2 border-blue-200 dark:bg-blue-500 dark:hover:bg-blue-600"
>
  Button
</button>
```

这个是最常规的写法，但是，省去"class"也是可以的，比如写成：

```html
<button
  bg-blue-400
  hover:bg-blue-500
  text-sm
  text-white
  font-mono
  font-light
  py-2
  px-4
  rounded
  border-2
  border-blue-200
  dark:bg-blue-500
  dark:hover:bg-blue-600
>
  Button
</button>
```

这个看起来就很奇怪吧，起初，你可能会觉得是不是有个解析器，自动识别符合 UnoCSS 规则的类名转换成 class。实际上不是的，不知道你是否还记得[CSS 属性选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors)，当然这个选择器通常用于表单相关的样式。在这里的写法，也是会解析为属性，这样看起来 CSS 代码好像变多了，所以通常情况下不建议这样使用，而真正意义在于，他能将相同的类型的规则分组到一起。虽然生成的 Style 没有减少，但是 HTML 部分的代码看起来更清晰，简洁了。例如：

```html
<button
  bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
  text="sm white"
  font="mono light"
  p="y-2 x-4"
  border="2 rounded blue-200"
>
  Button
</button>
```

上面是为什么要用属性模式，还有一些其他的写法，这里也直接从官方抄过来，大家简单了解下。

### 使用 `~` 自引用的前缀

```html
<button class="border border-red">Button</button>
```

可改写为

```html
<button border="~ red">Button</button>
```

### 无属性值的替换 class 写法

上面的 `btn` 示例已经有了，就是省略了 `class=""` ，略过。

### 属性名冲突的解决

```html
<!-- 如果我想要使用属性模式来个a标签添加一些样式，比如红色，但是原有的业务逻辑要保留 -->
<a text="ToHomepage">Home</a>
```

上面的跳转需要通过 `text` 内的值进行 `Javascript` 的相关逻辑处理。

当然不建议写成

```html
<a text="ToHomepage red">Home</a>
```

难道你要 `Javascript` 中对字符串进行处理，在检测应该如何跳转？NONONO。不如改写成：

```html
<a text="ToHomepage" class="red">Home</a>
```

但是我们讨论的是属性模式下的解决方案，那就这样吧：

```html
<a text="ToHomepage" unocss-text="red">Home</a>
```

比如这个 `text` 可能是 在某些业务场景下需要的逻辑字段，虽然我们一般尽量避免冲突，且真实存在的情况不多，但有时候是难免的，那就失效了。配置一下 `presetAttributify` 中的 `prefix`，将其特殊化，避免冲突。

```js
presetAttributify({
  prefix: "unocss-",
});
```

这是属性名的冲突解决，那还有属性值的咋办，真是万万没想到，还有这个办法。

```js
presetAttributify({
  ignoreAttributes: ["text"],
});
```

如果你一下子没搞明白，我来简单解释下，比如，我的 `text="red"` 中的 `red` 为业务逻辑，而不希望是样式，但是属性名 `text` 又是历史原因不可变更，反正都是历史的过。那么，总不能引入 `UnoCSS` 后，原来的页面就变色了吧，`UnoCSS` 可不背锅。通过上面的配置，就忽略了自动应用了 `red` 的办法了。

关于 `presetAttributify` 的一些其他配置还是看文档吧。hhh~

### 关于 TS 项目

如果你使用 TS 可能也要配置下，要不然编译或许会出问题。根据不同的项目查阅[官方文档](https://unocss.dev/presets/attributify#typescript-support-jsx-tsx)
