## Shortcuts - aliasing utilities, dynamically.

> 类似“快捷方式”，我认为是专门用于特别的元素样式，当然也可以搞成基础组见扩展用。

这个编写的方式和[ `Rules` ](./Customizable)的写法类似，这里就不赘述了。

UnoCSS 官方以 `btn` 组件扩展进行举例，可以参考：[Shortcuts 文档](https://unocss.dev/config/shortcuts)。

我这里也写了两个渐变色文字的 `Shortcuts` ，仅供参考。

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

如果在模板中使用代码如下：

```html
<span gradient-teal-blue>I Love Whidy</span>
```

假设页面中仅编写的 `html` 使用了 `gradient-teal-blue` ，那么只有该类编译为：

```css
[gradient-teal-blue=""] {
  --un-gradient-from-position: 0%;
  --un-gradient-from: rgba(45, 212, 191, var(--un-from-opacity, 1)) var(
      --un-gradient-from-position
    );
  --un-gradient-to-position: 100%;
  --un-gradient-to: rgba(45, 212, 191, 0) var(--un-gradient-to-position);
  --un-gradient-stops: var(--un-gradient-from), var(--un-gradient-to);
  --un-gradient-to: rgba(59, 130, 246, var(--un-to-opacity, 1)) var(
      --un-gradient-to-position
    );
  --un-gradient-shape: to right;
  --un-gradient: var(--un-gradient-shape), var(--un-gradient-stops);
  background-image: linear-gradient(var(--un-gradient));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

丰富的示例请见右侧演示效果或者在官方的[Playground](https://unocss.dev/play/?html=DwEwlgbgBAtgngWgEwD4BQUrAM4AcCGAdlAOYBO%2B4ApoQC4IAWVlVZKUAymDLgDZVQA4hWp0oACWYhWWAPR4i6YLPAQlq2IlQYsC4uUpga9Ws14IARrwCuVFAEkoAGQD2EAQHUGYEHGV6lFUh1SE1kdEwcAn0RIzoEMioQBDgqXl4XAHcUSXSXThh8MlooACEXP3lowNV0IA&config=JYWwDg9gTgLgBAbwFBzmKBTAzhmBBGGKYAIwFcZgAzATwBoU1McYBJAYwgDssHV1suAKpcIfOEQCGPKtBAYoAEWCZ2lAG7ZxUmXIUA1ScWkwA4lAhkw4gCYYqwLhgDC3BwHMGAXzhULIOAByMlF2LCxApFBIWEQJCABRLHZJMAwbAGUMABsMNWg4Hz8IAODQ8MiMAA8Y%2BDsqSTJsuvtHFzdgdwAKZFQsAAtoGHYKLAAuOABtRlRe1HnA9yhJG2AMLhgAWn6MFYVAsZn51ECYaq2AJirs324tkghsmzgSd02llbWNzZgITahfP4frtspsACwABgh8U2JGyZAwmwArFCXm92NlgGBgVV4GdcT9ljwwEZ1jBAuJUF5KVMjqgAPQAPQ%2BqzJmy6AB0AO4AagAlOzufyACT0mmoLqTOhwTjZaAAMX80tl0AAKhAALp8uAAXgAfHT5gADV7vZas76-f6AkqbYUIFVQRUlLzg1FW%2B2O9WulHQ00YrE4vHnQnSLAkzAbI00jXiWOMAQsca046J4SiLp8mlp-CEYjkSi0TPZ5i4DjcLA9Q3JSS5CYARgAdBdxTKbFwJoF%2BoQwON6fTsCBGwN6RSjl4s4x46gdFhZFB5FBk9NjrP54vlKoNNgq8dUKkwNkaIZjHCMBNJoFNptJFsD0eKUFryE-veaI%2Br5sX4Fp-MJzS1z0KAT2AExzEsMBiynbw%2BSQIA&css=Q&options=N4XyA)查看。

> 部分代码使用 `Tailwind CSS` 规则的原子类名，目前应用在我个人博客 <a href="https://www.whidy.net" class="important:gradient-teal-blue" target="_blank">Whidy Writes</a> 中。
