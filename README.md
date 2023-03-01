# UnoCSS Study Examples

> 当前资料对应的UnoCSS版本为 `0.50.x` ，其他版本请参见 `package.json` 。

这是个人在研究学习UnoCSS过程中做的总结，也是作为公司内部培训分享用到的PPT相关演示，仅供学习参考。

后期可能会整理成一份实践文档，发布出来。

该项目由 `Vite` 、 `Element-Plus` 搭建，有兴趣也可以看看[Vite-Element-Plus-UnoCSS](https://github.com/whidy/Vite-Element-Plus-UnoCSS)。

该项目适合搭建一个简单的**文档演示模板**站，我是通过Markdown来编写文档内容部分，并将结构完善，利于代码演示部分的展示，后面有空再优化整个模板的布局。

## 其他

### 关于markdown样式冲突问题

问题已解决，请更新到[v0.15.0](https://github.com/antfu/vite-plugin-md/releases/tag/v0.15.0)

~~因为我还没找到主题切换后， `vite-plugin-md` 插件自动注入的 `markdown样式` 覆盖了我原有的样式，导致的**代码块**颜色异常问题的方案，所以，如果本地预览想要看到较好的效果，你可能需要在安装依赖后尝试修改文件 `node_modules/vite-plugin-md/dist/index.js` 的 `6712` 行，删除该行的 `baseStyling` 。重启服务，查看效果。相关的issues：[May I disable baseStyling for a custom markdown style](https://github.com/antfu/vite-plugin-md/issues/92)~~
