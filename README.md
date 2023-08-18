# UnoCSS Study Examples

> 当前资料对应的 UnoCSS 版本为 `0.55.0` ，其他相关依赖版本请参见 `package.json` 。

【2023年08月10日】

当时创建该项目的时候还是2022年6月，UnoCSS虽然出来也有些时间了，但是生态及文档都比较简陋，所以就有了我这个项目，不过我既然都拖到了现在，其实很多东西也有了变化，官方的相关文档也非常详细了，唯一的不足就是没有中文版，不过也很详细了。那么我这个项目，尽量以丰富的**示例**，围绕一些**使用感受**，来谈谈对UnoCSS的看法和分享。

---

这是个人在研究学习 UnoCSS 过程中做的总结，也是作为公司内部培训分享用到的 PPT 相关演示，仅供学习参考。

后期可能会整理成一份实践文档，发布出来。

该项目由 `Vite` 、 `Element-Plus` 搭建，有兴趣也可以看看[Vite-Element-Plus-UnoCSS](https://github.com/whidy/Vite-Element-Plus-UnoCSS)。

该项目适合搭建一个简单的**文档演示模板**站，我是通过 Markdown 来编写文档内容部分，并将结构完善，利于代码演示部分的展示，后面有空再优化整个模板的布局。

## 其他

### 关于 markdown 样式冲突问题

问题已解决，请更新到[v0.15.0](https://github.com/antfu/vite-plugin-md/releases/tag/v0.15.0)

~~因为我还没找到主题切换后， `vite-plugin-md` 插件自动注入的 `markdown样式` 覆盖了我原有的样式，导致的**代码块**颜色异常问题的方案，所以，如果本地预览想要看到较好的效果，你可能需要在安装依赖后尝试修改文件 `node_modules/vite-plugin-md/dist/index.js` 的 `6712` 行，删除该行的 `baseStyling` 。重启服务，查看效果。相关的 issues：[May I disable baseStyling for a custom markdown style](https://github.com/antfu/vite-plugin-md/issues/92)~~

## 日志

### 2023年04月25日

更新到 `0.51.8` ，新增了 `uno.config.ts` 文件，发现使用 `eslint` 进行自动 `fix` 时，会出现大量的空行，故引入 `prettier` ，双重处理，然而 `prettier` 的最终效果我并不喜欢，因此又操作了一次 `lint:fix` 。（当然务必注意 eslint 配置和 prettier 不要冲突！！！）

### 2023年08月18日

* 解决了左侧菜单，点击后，高亮下样式与`group-hover` 一致。你可以看到本项目的左侧菜单来进行演示。也可看这个[UnoCSS Demo - actived](https://codesandbox.io/p/sandbox/unocss-demo-actived-xvst5l)
* 有位群友帮助我，在我询问很多种写法的文档，如何快速掌握的时候，给出了这个[各种写法的提问](https://discord.com/channels/937808017016119440/937812695623794799/1141970584062922755)，访问不了的话，直接看答案吧：[**很多写法是tailwind的，这里应该是比较全的**](https://github.com/unocss/unocss/blob/main/test/assets/preset-mini-targets.ts)。我看了下确实非常强大，强烈推荐。
