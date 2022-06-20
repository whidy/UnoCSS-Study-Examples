## Shortcuts - aliasing utilities, dynamically.

> 类似“快捷方式”，我认为是专门用于特别的元素样式，当然也可以搞成基础组见扩展用。

这个编写的方式和[ `Rules` ](./Customizable)的写法非常相似，这里就不赘述了。

UnoCSS官方以btn组件扩展进行举例，可以参考：[Shortcuts文档](https://github.com/unocss/unocss#shortcuts)。

我这里也写了两个 `Shortcuts`

```js
shortcuts: [{
    'gradient-header': 'text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent',
  },
  [
    /^gradient-(\w+)-(\w+)$/, ([, colorFrom, colorTo]) => `bg-gradient-to-r from-${colorFrom}-400 to-${colorTo}-500 bg-clip-text text-transparent`
  ]
],
```

上面代码中，一个是单纯的纯静态 `Shortcuts` ，适用于站点中并不需要复用的特殊的元素样式，比如用于首页的站点标题，我这里类名写成 `gradient-header` ；另一种可以自由发挥的动态 `Shortcuts` ，当然这只是在演示中这样写，虽然很酷，但会破坏网站设计的统一性。

我在页面中编写的 `html` 使用了 `gradient-teal-blue` ，会编译为：

```css
.gradient-teal-blue,
[gradient-teal-blue=""] {
  --un-gradient-from: rgba(45, 212, 191, var(--un-from-opacity, 1));
  --un-gradient-to: rgba(45, 212, 191, 0);
  --un-gradient-stops: var(--un-gradient-from), var(--un-gradient-to);
  --un-gradient-to: rgba(59, 130, 246, var(--un-to-opacity, 1));
  --un-gradient-shape: to right;
  --un-gradient: var(--un-gradient-shape), var(--un-gradient-stops);
  background-image: linear-gradient(var(--un-gradient));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

请见演示效果。

> 部分代码使用 `Tailwind CSS` 规则的原子类名，目前应用在我个人博客 <a href="https://www.whidy.net" class="important:gradient-teal-blue" target="_blank">Whidy Writes</a> 中。
