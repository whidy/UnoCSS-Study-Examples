## Fully customizable - no core utilities, all functionalities are provided via presets.

> 高可定制，UnoCSS 本身就是即时原子类 CSS 引擎，灵活且易于扩展。内部已经集成了大量常用预设，没有所谓的核心依赖，所有的功能都是通过不断强大的预设来实现的。

比如这几个类名的写法: `ml-3` (Tailwind), `ms-2` (Bootstrap), `ma4` (Tachyons), and `mt-10px` (Windi CSS) 都是有效的，当然也是预设中已有的。

这些常见的写法，都已集成在默认的 `preset` 中，上手即用。当然如果你想搞点特别的。可以定制规则( `rules` )。比如：

```js
rules: [
  [/^name-(.+)-(\d+)$/, ([, name, count], {
    rawSelector,
    currentSelector,
    variantHandlers,
    theme
  }) => {
    const selector = e(rawSelector)
    return `
${selector} {
position: relative;
cursor: pointer;
}
${selector}::after {
content: "${name.concat('~').repeat(count)}";
font-size: 1.5em;
position: absolute;
top: 0;
left: 0;
transform: translate(20%, 0%);
color: ${theme.colors.pink[2]};
}
${selector}:hover::after {
  color: ${theme.colors.pink[4]};
}
`
  }, {
    layer: 'whidy'
  }],
],
```

如果在模板中使用代码如下：

```html
<div class="name-whidy-2">I Love</div>
<div name-YOU-5>I Love</div>
```

这段规则将被解析对应的 `css` 代码：

```css
/* layer: whidy */

.name-whidy-2 {
  position: relative;
  cursor: pointer;
}
.name-whidy-2::after {
  content: "whidy~whidy~";
  font-size: 1.5em;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(20%, 0%);
  color: #fbcfe8;
}
.name-whidy-2:hover::after {
  color: #f472b6;
}

[name-YOU-5=""] {
  position: relative;
  cursor: pointer;
}
[name-YOU-5=""]::after {
  content: "YOU~YOU~YOU~YOU~YOU~";
  font-size: 1.5em;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(20%, 0%);
  color: #fbcfe8;
}
[name-YOU-5=""]:hover::after {
  color: #f472b6;
}
```

效果请见右侧的【**演示效果一**】或者在官方的[Playground](https://unocss.dev/play/?html=DwEwlgbgBAxgNgQwM5ILwCIB2CC2BTAWgHcALMEATwICZ0A%2BASSgBkB7CPYAenAjoChQkKNnwEAmgHkAqgQCsjFu049IdIA&config=JYWwDg9gTgLgBAbwFBzmKBTAzhmBBGGKYAIwFcZgAzATwBoU1McYBJAYwgDssHV1suAKpcIfOEQCGPKtBAYoAEWCZ2lAG7ZxUmXIUA1ScWkwA4lAhkw4gCYYqwLhgDC3BwHMGAXzhULIOAAiMlF2LCxAgG4kUEhYRAkIAFEsdkkwDBsAZQwAGww1aDgfPwgAgHIQiDCscqQMAA84%2BDsqSTJclvtHFzdgdwAKZFQoDuwALjgAbUZUGdQFuAB6AD0uSXkAWgGAOgBqAEptgB0bQ4ASJfFFgdnF6bo4dflHzhCYAF1r%2B4Q4KEkAO45fKFKCvMhQTBcGDAgowaCPdRGYAmAAS0hs%2BSgvAkAAsMPJindUAc4ABeAB8iGJC04PHgOBB8Kg5MSKTSGWyeTh0AG-yB3NBBxpI1wEK4cAABkhzghGTyoD5kJAsMBKNxJphcpINBhouwIVhoJNII4YApogABdJgXI0OAkaB2KCbXKbABMaDdnpImzAjgA1h64CBfQAWaJeGVywXMrzjcaSKjmlnIOnm6GTQKy54YHZ0tIwAblAB%2B5QOO0wGR1Aze0IOXiiSFk0M2qoAXhhJgBGHYAVgJ0RVauAGrgkhIRtyFD1SHhYEmAAZovlk0vojosLIoCBJpvteaBu7FwBSR6ng76iC5Y1wWUwfHyfPX6BYHb%2BrgBqbuj5eSPR%2BVQXjXEIE0KAEyTFNqVQTgb3Au8EAfAk81g1930DKYw1-f9pXuYpvlQYY8LgbUaAUSZygBXFgBsGhygI-C7i%2BRhmP4ZhcCwSZ5gWAQWBECABgOb5eNwAgiFIChqBoQThPYtg6SwIYaVSSR8h7HZ3QY9gbC4CjcUIMBOKWJZsBAHYsFxJZ6LuLwhJY7R-l0HcFE46ZN23eQlBUOFgE0RShIkRytz0KBDGMaFzEsMBBOY2ykCAA&css=Q&options=N4XyA)查看。

还不错吧~这是我临时想到的随便写的，这里解释下，我实际写了一个伪类 `::after` ，并 `repeat` 这个 `class` 的前缀 `whidy` 外加重复 `n` 次的后缀。

因此你想**输出 100 个 whidy~**，只需要写 `whidy-100` 。灵活性非常强大。通过这个例子，我想你应该就能完全理解 `rules` 的用法了~

> 特别说明一，此示例，其中一个使用的是 class 类名，另一个使用的是 html 的 attribute 名称来使用，关于 attribute 的相关用法后面会介绍。
>
> 特别说明二，此示例，原始版本中在 `rule` 规则内应用了 `@apply` 的指令，但实际上并未能生效，故作移除，在上面提到的的 `Playground` 中可以测试。我已无法追溯是因为之前的支持该写法还是我错误的写进去了，就目前情况来看，`rule` 中的规则不支持各种指令的写法。
>
> 特别说明三，此示例，关于rule中高级写法，数组内第一项则是正则，用于条件匹配规则，第二参数为一个函数，函数的参数又分为两个部分，第一个参数是正则匹配结果，参考[MDN String.prototype.match()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match)，第二个参数是内置的我称之为UnoCSS的context，可将常用结构出来使用。
