## Fully customizable - no core utilities, all functionalities are provided via presets.

> 如何高可定制？

比如这几个类名的写法: `ml-3` (Tailwind), `ms-2` (Bootstrap), `ma4` (Tachyons), and `mt-10px` (Windi CSS) 都是有效的。

以上几个常见的写法，都已集成在默认的 `preset` 中，上手即用。当然如果你想搞点特别的。可以定制 `rules` 。比如：

```js
rules: [
  [/^(whidy)-(\d+)$/, ([, name, count], {
    rawSelector,
    currentSelector,
    variantHandlers,
    theme
  }) => {
    const selector = e(rawSelector)
    // console.log(theme);

    // console.log({match, selector, rawSelector, currentSelector, variantHandlers});
    return `
${selector} {
position: relative;
cursor: pointer;
@apply border-l-2 pl-2 b-pink-2
}
${selector}::after {
content: "${name.repeat(count)}";
font-size: 1.5em;
position: absolute;
top: 0.25em;
left: 0.5em;
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

```html
<span whidy-2>I love </span>
```

结合起来你将看到如下效果：

<span whidy-2>I love </span>

<br/>

对应的解析出来的css代码：

```css
/* layer: whidy */

.whidy-2 {
  position: relative;
  cursor: pointer;
  border-left-width: 2px;
  border-left-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(251, 207, 232, var(--un-border-opacity));
  padding-left: 0.5rem;
}

.whidy-2::after {
  content: "whidywhidy";
  font-size: 1.5em;
  position: absolute;
  top: 0.25em;
  left: 0.5em;
  color: #fbcfe8;
}

.whidy-2:hover::after {
  color: #f472b6;
}

[whidy-2=""] {
  position: relative;
  cursor: pointer;
  border-left-width: 2px;
  border-left-style: solid;
  --un-border-opacity: 1;
  border-color: rgba(251, 207, 232, var(--un-border-opacity));
  padding-left: 0.5rem;
}

[whidy-2=""]::after {
  content: "whidywhidy";
  font-size: 1.5em;
  position: absolute;
  top: 0.25em;
  left: 0.5em;
  color: #fbcfe8;
}

[whidy-2=""]:hover::after {
  color: #f472b6;
}
```

---

还不错吧~这是我临时想到的随便写的，这里解释下，我实际写了一个伪类 `::after` ，并 `repeat` 这个 `class` 的前缀 `whidy` 外加重复 `n` 次的后缀。

因此你想**输出100个whidy**，只需要写 `whidy-100`。灵活性非常强大。通过这个例子，我想你应该就能完全理解rules的用法了~
