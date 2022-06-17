## Fully customizable - no core utilities, all functionalities are provided via presets.

> 如何高可定制？

比如这几个类名的写法: `ml-3` (Tailwind), `ms-2` (Bootstrap), `ma4` (Tachyons), and `mt-10px` (Windi CSS) 都是有效的。

以上几个常见的写法，都已集成在默认的 `preset` 中，上手即用。当然如果你想搞点特别的。可以定制 `rules` 。比如：

```js
rules: [
  [/^name-(.+)-(\d+)$/, ([, name, count], {
    rawSelector,
    currentSelector,
    variantHandlers,
    theme
  }) => {
    const selector = e(rawSelector)
    // console.log(theme);
    // console.log({match, selector, rawSelector, currentSelector, variantHandlers});
    //  @apply的末尾忘记写分号会导致编译报错，开发环境不会报错。错误信息大致是：js-unocss-hash.css:5:34: Unknown word
    return `
${selector} {
position: relative;
cursor: pointer;
@apply border-l-2 pl-2 b-pink-2 mb-4;
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
<div name-whidy-2>I Love </div>
<div name-YOU-5>I Love </div>
```

这段规则将被解析对应的 `css` 代码：

```css
/* layer: whidy */

.name-whidy-2 {
  position: relative;
  cursor: pointer;
  margin-bottom: 1rem;
  border-left-width: 2px;
  border-left-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(251, 207, 232, var(--un-border-opacity));
  padding-left: 0.5rem;
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

.name-YOU-1 {
  position: relative;
  cursor: pointer;
  margin-bottom: 1rem;
  border-left-width: 2px;
  border-left-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(251, 207, 232, var(--un-border-opacity));
  padding-left: 0.5rem;
}

.name-YOU-1::after {
  content: "YOU~";
  font-size: 1.5em;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(20%, 0%);
  color: #fbcfe8;
}

.name-YOU-1:hover::after {
  color: #f472b6;
}

.name-YOU-5 {
  position: relative;
  cursor: pointer;
  margin-bottom: 1rem;
  border-left-width: 2px;
  border-left-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(251, 207, 232, var(--un-border-opacity));
  padding-left: 0.5rem;
}

.name-YOU-5::after {
  content: "YOU~YOU~YOU~YOU~YOU~";
  font-size: 1.5em;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(20%, 0%);
  color: #fbcfe8;
}

.name-YOU-5:hover::after {
  color: #f472b6;
}

[name-whidy-2=""] {
  position: relative;
  cursor: pointer;
  margin-bottom: 1rem;
  border-left-width: 2px;
  border-left-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(251, 207, 232, var(--un-border-opacity));
  padding-left: 0.5rem;
}

[name-whidy-2=""]::after {
  content: "whidy~whidy~";
  font-size: 1.5em;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(20%, 0%);
  color: #fbcfe8;
}

[name-whidy-2=""]:hover::after {
  color: #f472b6;
}

[name-YOU-1=""] {
  position: relative;
  cursor: pointer;
  margin-bottom: 1rem;
  border-left-width: 2px;
  border-left-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(251, 207, 232, var(--un-border-opacity));
  padding-left: 0.5rem;
}

[name-YOU-1=""]::after {
  content: "YOU~";
  font-size: 1.5em;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(20%, 0%);
  color: #fbcfe8;
}

[name-YOU-1=""]:hover::after {
  color: #f472b6;
}

[name-YOU-5=""] {
  position: relative;
  cursor: pointer;
  margin-bottom: 1rem;
  border-left-width: 2px;
  border-left-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(251, 207, 232, var(--un-border-opacity));
  padding-left: 0.5rem;
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

效果请见**演示效果一**~

还不错吧~这是我临时想到的随便写的，这里解释下，我实际写了一个伪类 `::after` ，并 `repeat` 这个 `class` 的前缀 `whidy` 外加重复 `n` 次的后缀。

因此你想**输出100个whidy~**，只需要写 `whidy-100` 。灵活性非常强大。通过这个例子，我想你应该就能完全理解 `rules` 的用法了~
