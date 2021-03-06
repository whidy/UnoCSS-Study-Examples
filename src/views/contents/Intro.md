## UnoCSS - The instant on-demand Atomic CSS engine.

> [**UnoCSS**](https://github.com/unocss/unocss) - 具有高性能且极具灵活性的即时原子化 CSS 引擎。

如果熟悉 `bootstrap` 、 `Tailwind CSS` 或者 `Windi CSS` 的话，会发现 `UnoCSS` 上手十分容易。

不管你是否熟悉上面提到的**CSS框架**或**UI库**，他们都有个共同特点：**原子化CSS类名**，在学习UnoCSS前，强烈建议先阅读作者的这篇文章[《重新构想原子化 CSS》](https://antfu.me/posts/reimagine-atomic-css-zh)，你大概就会感受到它的魅力和优势。

了解或学习前有几点特别说明：

* UnoCSS 是一个**引擎**，而非一款**框架**，因为它**并未提供核心工具类**，所有功能可以通过预设和内联配置提供。【[Ref](https://antfu.me/posts/reimagine-atomic-css-zh#%E5%90%91%E4%BD%A0%E4%BB%8B%E7%BB%8D-unocss)】
* UnoCSS 读作和卡牌游戏Uno相同，大致读作【**吾诺**】，虽然我们习惯性读作【**优诺**】，建议更正。【[Ref](https://discord.com/channels/937808017016119440/937811334907723806/981899159546236978)】
* UnoCSS 仍在高速的版本迭代不断完善的过程中，遇见BUG不要慌，先**仔细阅读相关文档**并**检查代码**是否有不规范的使用问题，若技术有限，无法定位再去Issues区搜索一下，依然没有结果再去提一个Issue，至于如何提Issue，这也是个大学问，建议阅读[提問的智慧](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)。

### 关于UnoCSS文档

> 起初看到这个UnoCSS的文档，我非常纳闷（挠头），这个文档很个性啊，这是个文档吗，咋用啊？大大的输入框，输入来探索（Type to explore），看起来互动性很强。下面写着：
>
> Type anything to search for atomic utils, CSS properties, guides, or evaluate the expressions!
>
> 我不知所措，我要type啥进去好呢？🤨

不知道有没有人也在第一眼有相同的困惑，一方面是英文不好产生的，另一方面这个文档设计的真的是极简，不过理解了使用方法后，会发现真的不错~

接下来我简单介绍下首页和文档内容部分的特点。

#### UnoCSS文档主页

![UnoCSS文档主页](/public/images/UnoCSS_Index.png)

上图我分为主要的三个部分：

1. 5个小图标分别是：文档内容部分的展现效果切换、配置preset和一些规则（用于playground的测试）、playground模式、项目github仓库、主题切换
2. 输入关键词进行文档内容信息的查询，常用的就是输入 `css` 属性相关词，还有非常重要的 `guide:` 来查询UnoCSS主要的配套。
3. 这里包含了你当前使用的文档中用到的 `Presets` ， `Rules` 等等数量，你可以试着在第一条提到的config页面中添加一条rules并保存，这里的Rules数量就会+1啦。

重点说明图中第一部分的第二个图标 `config` 。默认有一个规则为 `custom-rule` ，如果我加一个 `custom-rule-2` ，那么除了上面提到的Rules数量增加1，在输入框输入 `custom-rule` 时，也会发现两条规则，包含我们自己添加的 `custom-rule-2` ，点击 `custom-rule-2` ，右侧便显示了规则对应的CSS样式。

#### UnoCSS文档内容

![UnoCSS文档内容](/public/images/UnoCSS_Docs.png)

文档部分主要有两种，一种是输入 `guide:` 来查询UnoCSS的核心内容，也算是UnoCSS生态相关的信息；另一种则是不熟悉各种规则的朋友，通过输入CSS样式关键词，快速查阅有效的类名写法的例子。

文档内容部分分为两列，关于输入 `guide:` ，这里大家根据需要查阅即可。关于**CSS关键词查询**部分我简单说明下，左侧是根据输入的内容展现出的相关 `rules` ，右侧则是对当前输入信息预测出来的列表中第一条的解释。以图中的 `border` 为例。

主要说明右侧部分， `border` 是内置 `preset` 的规则。【Rules】展示了对应匹配的正则表达式，【CSS】表示该类名对应的CSS输出结果。其他不太重要的则是：【MDN Docs】对应相关的MDN文档链接，【Alias】同样效果的CSS类别名，【Same Rule】看起来是复合正则（即Rules）的其他的随便列举的几个写法。

> 文档集成了MDN和Can I Use的外链，这对CSS不熟悉的朋友来说非常友好！

### 关于这个文档

我起初在6月初写一个新项目准备看到Element-Plus官方的一个模板[element-plus-vite-starter](https://github.com/element-plus/element-plus-vite-starter)中用到了UnoCSS，便引起了我的注意，开始了解UnoCSS这个项目。

简单了解后，初步评估，可以用于新的内部项目开发，便开始从浅到深学习UnoCSS，在使用过程中也确实遇到了不少问题，大多是因为不熟悉UnoCSS，当然也有少量的是UnoCSS还不够完善，不过就目前来看很多问题都能得到较快解决。

在这半个月的学习UnoCSS的时间，他的版本号从 `0.37.x` 升级到了 `0.39.x` ，大大小小的版本差不多10来个了。稳定和兼容性方面或许一般，如果用于商业项目，个人暂时不建议使用，但是从未来发展前景上来看，个人觉得**值得学习**。

我创建的这个项目，在Github公开，可以访问[UnoCSS-Study-Examples](https://github.com/whidy/UnoCSS-Study-Examples)来了解学习使用。当然，我在学习UnoCSS和整理成相关资料的过程中也许也会存在错误，希望能够多多包涵，并指出！

本文档大部分示例的类名规范基于 `Tailwind CSS` ，因为我比较熟悉这个。也许 `Windi CSS` 或 `其他框架` 写法不同，不过效果是一样的，你可以按你自己熟悉的框架和规则来写。（例如：左边框，在 `Tailwind CSS` 为： `border-l` ，而其他的写法，或许是预设自带的 `b-l` 也是一样的。）

如果文档对你有帮助，感谢你的支持🥰。
