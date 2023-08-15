## UnoCSS - Instant On-demand Atomic CSS Engine

> [**UnoCSS**](https://github.com/unocss/unocss) - 具有高性能且极具灵活性的即时原子化 CSS 引擎。

### 核心概念

**Customizable**（灵活定制）· **Powerful** （超强）· **Fast** （超快）· **Joyful**（超爽）

### 主要特性

- [**Fully Customizable**](/#/Customizable) （高度灵活）
- **Instant** （即时性）
- **Lightweight** （轻量）
- [**Rich Integrations**](https://unocss.dev/integrations/vite) （多项目集成）
- [**Shortcuts**](/#/Shortcuts) （简写模式）
- [**Attributify Mode**](/#/Attributify) （属性模式）
- [**Pure CSS Icons**](/#/CSSIcon) （CSS 图标）
- [**Variant Groups**](/#/VariantGroups) （组合缩写）
- [**CSS Directives**](/#/CSSDirectives) （CSS 指令）
- [**Compilation Mode**](/#/Compilation) （编译模式）
- [**Inspector**](/#/Inspector) （调试模式）
- [**CDN Runtime Build**](https://unocss.dev/integrations/runtime) （CDN 运行时构建）

如果熟悉 `bootstrap` 、 `Tailwind CSS` 或者 `Windi CSS` 的话，会发现 `UnoCSS` 上手十分容易。

不管你是否熟悉上面提到的**CSS 框架**或**UI 库**，他们都有个共同特点：**原子化 CSS 类名**，在学习 UnoCSS 前，强烈建议先阅读作者的这篇文章[《重新构想原子化 CSS》](https://antfu.me/posts/reimagine-atomic-css-zh)，你大概就会感受到它的魅力和优势。

了解或学习前有几点特别说明：

- UnoCSS 是一个**引擎**，而非一款**框架**，因为它**并未提供核心工具类**，所有功能可以通过预设和内联配置提供。【[Ref](https://antfu.me/posts/reimagine-atomic-css-zh#%E5%90%91%E4%BD%A0%E4%BB%8B%E7%BB%8D-unocss)】
- UnoCSS 读作和卡牌游戏 Uno 相同，大致读作【**吾诺**】，虽然我们习惯性读作【**优诺**】，建议更正。【[Ref](https://discord.com/channels/937808017016119440/937811334907723806/981899159546236978)】
- UnoCSS 仍在高速的版本迭代不断完善的过程中，遇见 BUG 不要慌，先**仔细阅读相关文档**并**检查代码**是否有不规范的使用问题，若技术有限，无法定位再去 Issues 区搜索一下，依然没有结果再去提一个 Issue，至于如何提 Issue，这也是个大学问，建议阅读[提問的智慧](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)。

### 关于 UnoCSS 文档

> 更新：2023 年 08 月 10 日

这更新速度太快了，咋今天早上来一刷新就 `0.55.0` 了，那再升级一下依赖吧。看了下更新日志，还好对我目前写的没有影响。

> 更新：2023 年 08 月 07 日

升级到了 `0.54.1` 。另外该文档增加了从官网偷来的[彩虹动画](https://unocss.dev/play/?html=DwCwjABATghglgOwEYHsDuBaALgUwB5YB8IOANqShGilKQCbAD04hAUMHXAG7TzLoYAxigS5RbCBA7dCCGgFsYpCLgJNOXCVJgQQUHADMAvACIAxCcIBhFCmUBBBIJA0AdExht1M1kA&config=JYWwDg9gTgLgBAbzgEwKYDNgDtUGEJaYDmANHGFKgM6owCCMMUwARgK4zDoCeZF1tAJIBjAlT6UaMAKpYIcAL5x0UCCDgByNnOFUqGgFChIsRHBgQAolWEBDMKmQBlVABtUwi1EXLV6gETaELpU-gDcBqgAHibwaOi2bK5xGNh4BMQAFAgGcHBQSdQAXHAA2rl5ZRWVcAD0AHpQttgsEADuALSZADptANQAlAAktWTVlZmlZFi2IKgAumRITW0u7p7QZMJsUJRYMGseXmQAbrbMtvsAEpfI7lDi5gAWqHOKA3AAvAB8iOM1oiwVAg7gAdK4IERMjM5mQVocNlAtjs9gc3EdNnAzhdrrd7lQBhEagCxPAaOsvF9zFYbPZHAivJl4ejER9-pUuHBobNUF9Pp9NDBojANB8csTiZQYDssHAAAYGIYIckYqBKcVwUQQqAlbGZDodKAsDosJpYZCEgwKAwKiV5JRuGh-O2VKUy%2BWK5UsrxKWzOzUg6C6876w3G023S3WvK2u3R4kKEjjRYVFN5fhSKglco1DO0WQQTIDJO5yS0BhMVgcLjcIslyp5mAiMTZdm09wlACMoIATPWAcgsCUNE9GGAs7VatQQKCqE9ahp%2B%2B96ymFAMDEA&css=AIawpgngZgTghgWzAZwATwJYDsBGB7Ad1QG8AoVVABgFITUBaemHeneLAEwC5UBiSynACcADjABuBkxZs4negBsMAcwAWAFx68ALHA4BGHNsmNmrdh0UqNYGFoDsIqHoDGJ6ebmWOcGCC0CIgBMAGxC7may8j5%2BtgGUAKwc2vYRMhb0WGAAHpp8AkJQUKmoAL6k%2BgB0QQm0xFKRFvHCQiFpnvJKank6OAZ97VGWXTZ2fPaFOGAJgxkx-vmUIgDM9vqzXvTzcYsJYNpQG-JZufFCHM6S5UGVtXSm6V7NQoVHw9Y92i4GLm0Nj50PjtePY4FAphJ-h1vL4Fvwlqs4G8trDgQI9gk-g9oZkcj0CjgoG4yqRlpV7Hd6tihs84CVqRkRp8OD9DlChlZusD7ITCSJkfN4itggLUWN4RjIQzNid8ZRRFAOFdyKhKeymothDhKMimVptGADBx6R4OUzuRcwWzpdFYULliIkerNttxeiwCEZs7jniziFFcqQtU1TbuJqhDh%2Bd73t19Yr9GAddHOaMHGBnEVRX57UJ1snXfE9iElcnZWdlgGSfZbnVo88XEnQymeglKBxKGAo03zeL7EUrVm4YFli9B2jEmB7MZS76%2BEEwEJKETlSJySHTRr4XARC4TY1Nnq%2BAl9O2oI2NwegeKRPooIVrRfbdnFsE4Of90-wG6JzzkWW%2BNoHAiJayqoPoND3I%2BYZbjuD4fjGGhaAkQQuEUe4Agh6jAsEUBOHBGEos%2B8KvuhOIFrsnZ5k2-68CEDpglG5T6FUNS1qGzT2BwXrdh8SHLKhmbJj2WgiAceGDkK%2BhwFKUGEV%2BhZAaRHI0RSIh9l6TE3Ou8HNMWxI8bGR4JC46b4Tiwl8CICTFIJTaCi%2BhjTnZYoKcBf6zrwVkrFAeZMWSFJsVBulgEEuq8UeITfLZskWZ5fb%2BmZHL2cRlA4OE%2BYubsLhCMs7mnHwQhBCIHYluUYHaRhzQGkpjLhbwCT2C4AlhVy15OAciVzHaix9oSY7fgkaVdrJNGFI1C7KvoQasZBOmassYD6TFdUJDuA5CVeImFBWnUut18L2ItuUZbEA1pUt8G4vlvBwHSYjHUx1YVdCzRBD5LWIUeO73h9WHXmCt67Z%2B8ScS4w2XeREpCG%2BeU9DgDWAaVFSrgFs2VZqS5Octhn1UIu7RZdsUiISS5AzCRECDyLg4P1haOsd1EeVMazGqBQQQVSQWLPeNWXjjCRwC41lk822EmaZEk9YLMkQ5lEqgliI0ebuxYGMqQQsc9NLcyBG384LO2-dhHCLQTBHJZTwHvubcvogL4METRqFhNl6taYFc3whGy56599U4C4gNG9eJs-SdQ6UPYxaheH44JMst2w1oXEhJFMfXP5WubgUTglgZfuDYSZvmZtllgJOxdJftlOAQzsmQ%2BiUk0zO10cL8yw4E6ZUzZznsFP6efYwXOAB5XtWtSJ5cdZLB0nljsunfEBxwM3jPXWAU2pQ9pChMGHvo17FaD4TK0j2H%2Bd-ZPG9j3tFOUAPdcL-JiyASvSd8B6exvySQRPfvL1zgXEuC6BFDy0QjAlYOWgXgmxvsDRYkUOAx2covF%2BncnRrx6AuYycB047xRlnJ4AEgK6wvmmHAhtfaXz4CvDgRcZ4CDCGrWO35tCOnSpgrQhoBbQ1AssDmdY%2BB0UdLhX6IlwSkygXwEexo4HkzhPw1OqFaYvwFrzH068oAJBeHg5Ymt-7axBKtdSYiCrOAuCLWKLg9DT3DvqVo-EQFkVtkIbQUl56Ow8j5bRIh0rlGWO7NGADPKrQrFRIePRpLCDkaLcUJCg52KPPDIkDtnGoN4POBacBwmXRolAGoohfKkkzgYzchViqGlMbwAOcBIFUOBB6KKItkohDgMZFwHi0nPx0PoBO5x368HyWovx5BliEM4NA4oJkOERK0GDXBMTYr5OyjE5K9hVINhUfVSgYzRADKGbuIpyxprjOgrdRwYBH6gLqhwEcEt6niigItOpKC4QrASNoEeWzjJ6Jyvs-QRYRmrBrEEwx8MpwsiqaHehDytBFBcG9Zp%2B1gKtnhls1OKExADPTCEe%2BRyCGlKIdUycJ51GYS4b4vsljS6DPBEUJFRFWifLBOi-JIQRCpOUh5Q0dEBagW0AI9ifAVYshydcnGPlXGXFhXwIoo8GVwiEPsUEMyn7cnsOzEULcsE4E9MhZUbi96gs3M7PGqrxV%2BzvLmfJUjaVpVWftWp2gE7IPrnLQ6%2BghCNWxSIMInyDWBN7gfFOacqlFGAmAVeETgRypeW6oiBs7xRrVdeNxkduJK3XtoSK2hpzlGdWuQlEy%2BBtzop3MNuEphXJLhPWV4JKGvK0DgIIHdXFbN8ZQbNIsaKJn9MsJGqBtCnK4ZvChFaOV0NtXKhJjbpH2FWDudt7Z76coyDROh87jkGpOUW6Cn8wDfzIXW31SCp0ZnBDPEeyw2EZpTdA8C99rY4nXesuiSZ81-2NUS7B1jXUnwlbhL4GDo2PPMTaxJxK9GcS2a49E5rn0eQMKCIIXdSBsMLV%2B4tvBuHCGA-%2By1uF%2BJipramOt0t4NVyIoHN6FIYP2HRH%2Bzx10mqcSCHm8grZd1cK0To8dQRIxnpXomGeLgAkcGLDB4qnbk1MZ6L8G8CZlTHiNUG4J3jRAUfHgR181La20toWSuSczkLidvTbdJ0MBDOoGXyNxjFSDIRBapwxQzCl8bpIJgOMtzNwiFvOPYMG3w7KcVy66Q01jb3jhh5zm4hl0k03zbTdzBNNTM10uZIQ3qYkCwIMZNmipvjZGVBIw7ZU1EOeO7QrRBN0JC11Kj8d9AGhg4uSg84BkrytsScomIVOCMGQCj0CXAQAd9W5GV%2BnI2dMo7551ubDOQ1EAIX%2BHWRwCGbj1z9MXv1QFxSEYjZo6rho5Wlw7em5WCBk%2Bl4VyxVgVjo8tp9oWehmvZkjVa0X%2Bs8rGXhi1PRw10mPn9mN4IUPVpm3M3pFDV2326bB-bw3LCjSq8ed95BcVcY-rqkrjGSP-dwsaRW%2BHqF2u0VdiH0jLmXIO-VuHGtmI05lB5YmXqAWBn0ZhvdvrXHk60-jpwIRvN45BzgCY03adNqMEEIIiO5LYUlUsAZKwXiGEDIGr72aOni8S-jnKIRDNLPBNuOrsOm1Tky7jmbYtbwCAGSq5tRS6KfaFdh%2B%2BUB%2B0VtaPts9fRfWXtzdk37XTsLBFbE9tdHk1jnBWySVAnpMe8A3bdonf24VWr5RN%2BF%2Bg%2BwzzBAaZi7btAodt9qrQ%2BulXtZJKnPrLvjRR34Z7oW2uRukdpR00Euf4bsxT8H68bWzzh6Z9dJIb48tV62-1pDuCg9nctQeztunW-wvWc3%2BRWg2mYhL687kFD%2BGD40S2KSvTuukHZc7rmvAWNINX82OF9NdBnusfR3PiRWtbPWasLfmbPi6DY%2Bx1A9GCe8mzEQus%2B-2KGIQ2aj%2BjSM8EYSQX%2Bd64wUOCBsmWg16cAuaG2pAawNeF%2Btm%2BgMOLeOqt0ReZ6Bg7KsBm%2BKBveZeomiY%2B%2BSOHkhgG%2B28GqTm-W4WvSVS%2Bweg92meio2aPeFOnkHoe%2B6KU4D6AyAgtSg0yo865%2BnszajoS4UKdCOyQOwuoGhON%2ByUHKqc1BVu4o%2B2uaBhEe100hqc28ABpWN0kY7YJuRBycg0t2DhmEIOPgdEM8N4YQphsOwIg0KQvhB%2BHEkUchO6nO6%2Ba2qUVS3wuq-EU6wE4m4OEu4wtS2oDBcu4oJWVWQRjB5hggak7G6y7BLur2bYMRg0KwGhYBMaHY98Oh%2B086guuRmR%2Bo%2Bw6RUhBR0GVYBKERBUKO4EVSfQV6oBfODSh0xyQhKRtEu4AgGRkMKQgELRNE0hogGk5AxUCeLOawp2fOTanyyQjORBwIJsHoFBEGkBGqLRCxC%2ByxHkqxWKJIN4uBnsyuuYvOOu6%2BAcnauxOuJxBovqrhRmR4u4Aq8xcsDoqOGRKxggLwfw5QwQJRF%2B9uGsVSuCCKVWtq1MB6z%2BEG8cUc1xcsWW7M0J9xsJrwTxJSfRIInqSCBudUogWuoxfx4ogci0tGEGug6yhJ6SNQ8cdx%2BRuGJQZUVkCe5eIUzJjhZcvwHytqou5cHenJkcb%2BLCWgBBJWApcoWoaOvqLxB8I%2BOyvxUpnkXwFIM%2BYx4ogsZ4xUM8YyoIggWylAAKuKpJgpEY9makSJnsx42S8RVCDgZq3uE22S%2BSakM8v8PIU0jpiQ9GrpWpeMOpvR22WGAef%2BVSektShBbh4orQUAbCkpa%2BfAzEjUt40ZDUmpzQO4wp5Ai4Ce6BmB6ZlALGGRRMhQ2iRphZB0SCWZrRuwxURxeRWpsEyouYepwSzBJWyRnxR4%2Bg3w6ytqjUu2-SEGlMly4J6ScG5RpemonE6xhUXpB8Fhsh-pAEO4nYLZNKFIxQtSDCkc7uPZDcr%2B2enRtSbcI5VJyZ0EFhnhJ5OgsEHKC51kjoBZwJKUAqZZuCcZwUeCqAQgNh0hUcQJYCVWqEuYC5-oEYC21cSwnasuj5g0RUL51UI54Rn5lZU4VSVW7Yo4E2Ucd4myK5SwAKA5vZEoomUF80i0I5E%2BLu0hak1RexAE5wggluFpDgfYgseF2FN42iZZomhmMJCyRSogChh5sJVklFegTcC5Eltyt5wQQZ2%2BA0ty3aZJhW7GD6CeDxIFyFWlRgC5Tgrg%2BloQUlG5iQyQClZJPMyo5QpAXAMAeAeA6gJAKovF6lNldUug-QN%2BsUjg5iQJFsSwLlZZHlnR3lKocgGACAcA6gGAeAWAPAmAuAhAYElAaASgWQvgqA2AUA2AGAWE4gpAvlwASAHAGAcAqAAAFAAA4wDpi2DIBMCGgACuJklgCAQVeVBV6AI1JkAAlCFRQP5YFcFWQBQBQJldlblflTwFgPlWAKgAAIRZXdV4AwDqByDqCNUUDlDlBAA&options=N4XyA)

> 更新：2023 年 06 月 27 日

现在竟然已经过去创建项目 1 年了，我连个最基本的版本都没完成，最近才非常闲，我发现居然更新到 `0.53.3` 了，简单的过了一遍 release 中的 changelog。那我就按照当前的版本在重新梳理一遍吧。最新官网真好看：

![UnoCSS官网 - 2023.06.27](/images/UnoCSS_Index_20230627.jpg)

> 更新：2023 年 04 月 25 日

由于这个示例是去年创建的，当时首页就是如下文所说。当然今年（2023 年）发现整个 UnoCSS 网站进行了大更新。所以，新的 UnoCSS 官方介绍和文档已经相当的完善了。各位，只需要访问[官方网站](https://unocss.dev/)，根据个人需要进行阅读和实践即可，当然我目前观察到，现在**只有英文版文档**。

---

> 起初看到这个 UnoCSS 的文档，我非常纳闷（挠头），这个文档很个性啊，这是个文档吗，咋用啊？大大的输入框，输入来探索（Type to explore），看起来互动性很强。下面写着：
>
> Type anything to search for atomic utils, CSS properties, guides, or evaluate the expressions!
>
> 我不知所措，我要 type 啥进去好呢？🤨

不知道有没有人也在第一眼有相同的困惑，一方面是英文不好产生的，另一方面这个文档设计的真的是极简，不过理解了使用方法后，会发现真的不错~

接下来我简单介绍下首页和文档内容部分的特点。

#### UnoCSS 文档主页

> 请忽略图片中的版本号，毕竟写这个东西拖的太久了。

![UnoCSS文档主页](/images/UnoCSS_Index.png)

上图我分为主要的三个部分：

1. 5 个小图标分别是：文档内容部分的展现效果切换、配置 preset 和一些规则（用于 playground 的测试）、playground 模式、项目 github 仓库、主题切换
2. 输入关键词进行文档内容信息的查询，常用的就是输入 `css` 属性相关词，还有非常重要的 `guide:` 来查询 UnoCSS 主要的配套。
3. 这里包含了你当前使用的文档中用到的 `Presets` ， `Rules` 等等数量，你可以试着在第一条提到的 config 页面中添加一条 rules 并保存，这里的 Rules 数量就会+1 啦。

重点说明图中第一部分的第二个图标 `config` 。默认有一个规则为 `custom-rule` ，如果我加一个 `custom-rule-2` ，那么除了上面提到的 Rules 数量增加 1，在输入框输入 `custom-rule` 时，也会发现两条规则，包含我们自己添加的 `custom-rule-2` ，点击 `custom-rule-2` ，右侧便显示了规则对应的 CSS 样式。

#### UnoCSS 文档内容

![UnoCSS文档内容](/images/UnoCSS_Docs.png)

文档部分主要有两种，一种是输入 `guide:` 来查询 UnoCSS 的核心内容，也算是 UnoCSS 生态相关的信息；另一种则是不熟悉各种规则的朋友，通过输入 CSS 样式关键词，快速查阅有效的类名写法的例子。

文档内容部分分为两列，关于输入 `guide:` ，这里大家根据需要查阅即可。关于**CSS 关键词查询**部分我简单说明下，左侧是根据输入的内容展现出的相关 `rules` ，右侧则是对当前输入信息预测出来的列表中第一条的解释。以图中的 `border` 为例。

主要说明右侧部分， `border` 是内置 `preset` 的规则。【Rules】展示了对应匹配的正则表达式，【CSS】表示该类名对应的 CSS 输出结果。其他不太重要的则是：【MDN Docs】对应相关的 MDN 文档链接，【Alias】同样效果的 CSS 类别名，【Same Rule】看起来是复合正则（即 Rules）的其他的随便列举的几个写法。

> 文档集成了 MDN 和 Can I Use 的外链，这对 CSS 不熟悉的朋友来说非常友好！

### 关于这个文档

我起初在 6 月初写一个新项目准备看到 Element-Plus 官方的一个模板[element-plus-vite-starter](https://github.com/element-plus/element-plus-vite-starter)中用到了 UnoCSS，便引起了我的注意，开始了解 UnoCSS 这个项目。

简单了解后，初步评估，可以用于新的内部项目开发，便开始从浅到深学习 UnoCSS，在使用过程中也确实遇到了不少问题，大多是因为不熟悉 UnoCSS，当然也有少量的是 UnoCSS 还不够完善，不过就目前来看很多问题都能得到较快解决。

在这半个月的学习 UnoCSS 的时间，他的版本号从 `0.37.x` 升级到了 `0.39.x` ，大大小小的版本差不多 10 来个了。稳定和兼容性方面或许一般，如果用于商业项目，个人暂时不建议使用，但是从未来发展前景上来看，个人觉得**值得学习**。

我创建的这个项目，在 Github 公开，可以访问[UnoCSS-Study-Examples](https://github.com/whidy/UnoCSS-Study-Examples)来了解学习使用。当然，我在学习 UnoCSS 和整理成相关资料的过程中也许也会存在错误，希望能够多多包涵，并指出！

本文档大部分示例的类名规范基于 `Tailwind CSS` ，因为我比较熟悉这个。也许 `Windi CSS` 或 `其他框架` 写法不同，不过效果是一样的，你可以按你自己熟悉的框架和规则来写。（例如：左边框，在 `Tailwind CSS` 为： `border-l` ，而其他的写法，或许是预设自带的 `b-l` 也是一样的。）

如果文档对你有帮助，感谢你的支持 🥰。
