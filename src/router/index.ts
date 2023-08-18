import { createRouter, createWebHashHistory } from "vue-router";
import Intro from "@/views/TheIntro.vue";
import Shortcuts from "@/views/TheShortcuts.vue";
import Attributify from "@/views/TheAttributify.vue";
import CSSIcon from "@/views/TheCSSIcon.vue";
import VariantGroups from "@/views/TheVariantGroups.vue";
import CSSDirectives from "@/views/TheCSSDirectives.vue";
import Compilation from "@/views/TheCompilation.vue";
import Inspector from "@/views/TheInspector.vue";
import Customizable from "@/views/TheCustomizable.vue";
import Thinkings from "@/views/TheThinkings.vue";

// 我发现不知道从何时起UnoCSS的配置支持手动添加需要解析的文件
// 因此路由这里的icon可以直接写全名了，但是我这个项目用了个小技巧，就是hover的时候会改变icon
// 因此，这里的hoverIcon也随之改变了 `group-hover:i-carbon-notebook-reference` 这样的代码
// 务必记住，这个不能在Vue中拼接成 “:class="item.icon + ' group-hover:' + item.hoverIcon"></i>”
// 所以这里使用的groupHoverIcon和isActiveIcon都是为了构建而提前写的。
const routes = [
  { path: "/", redirect: "/Intro", meta: { icon: "i-carbon-book", hoverIcon: "i-carbon-face-satisfied", groupHoverIcon: "group-hover:i-carbon-face-satisfied", isActiveIcon: "[&.is-active_i]:i-carbon-face-satisfied", topic: "前言", menuShow: false } },
  { path: "/Intro", name: "Intro", component: Intro, meta: { icon: "i-carbon-book", hoverIcon: "i-carbon-notebook-reference", groupHoverIcon: "group-hover:i-carbon-notebook-reference", isActiveIcon: "[&.is-active_i]:i-carbon-notebook-reference", topic: "前言", menuShow: true } },
  { path: "/Customizable", name: "Customizable", component: Customizable, meta: { icon: "i-carbon-ibm-toolchain", hoverIcon: "i-carbon-ibm-toolchain", groupHoverIcon: "group-hover:i-carbon-ibm-toolchain", isActiveIcon: "[&.is-active_i]:i-carbon-ibm-toolchain", topic: "高可定制", menuShow: true } },
  { path: "/Shortcuts", name: "Shortcuts", component: Shortcuts, meta: { icon: "i-carbon-asset", hoverIcon: "i-carbon-asset", groupHoverIcon: "group-hover:i-carbon-asset", isActiveIcon: "[&.is-active_i]:i-carbon-asset", topic: "简写模式", menuShow: true } },
  { path: "/Attributify", name: "Attributify", component: Attributify, meta: { icon: "i-carbon-code", hoverIcon: "i-carbon-code", groupHoverIcon: "group-hover:i-carbon-code", isActiveIcon: "[&.is-active_i]:i-carbon-code", topic: "属性化模式", menuShow: true } },
  { path: "/CSSIcon", name: "CSSIcon", component: CSSIcon, meta: { icon: "i-carbon-face-wink", hoverIcon: "i-carbon-face-satisfied", groupHoverIcon: "group-hover:i-carbon-face-satisfied", isActiveIcon: "[&.is-active_i]:i-carbon-face-satisfied", topic: "纯CSS图标", menuShow: true } },
  { path: "/VariantGroups", name: "VariantGroups", component: VariantGroups, meta: { icon: "i-carbon-group-objects", hoverIcon: "i-carbon-group-objects", groupHoverIcon: "group-hover:i-carbon-group-objects", isActiveIcon: "[&.is-active_i]:i-carbon-group-objects", topic: "组合缩写", menuShow: true } },
  { path: "/CSSDirectives", name: "CSSDirectives", component: CSSDirectives, meta: { icon: "i-carbon-at", hoverIcon: "i-carbon-at", groupHoverIcon: "group-hover:i-carbon-at", isActiveIcon: "[&.is-active_i]:i-carbon-at", topic: "CSS指令", menuShow: true } },
  { path: "/Compilation", name: "Compilation", component: Compilation, meta: { icon: "i-carbon-tree-view-alt", hoverIcon: "i-carbon-tree-view-alt", groupHoverIcon: "group-hover:i-carbon-tree-view-alt", isActiveIcon: "[&.is-active_i]:i-carbon-tree-view-alt", topic: "编译模式", menuShow: true } },
  { path: "/Inspector", name: "Inspector", component: Inspector, meta: { icon: "i-carbon-inspection", hoverIcon: "i-carbon-inspection", groupHoverIcon: "group-hover:i-carbon-inspection", isActiveIcon: "[&.is-active_i]:i-carbon-inspection", topic: "调试模式", menuShow: true } },
  { path: "/Thinkings", name: "Thinkings", component: Thinkings, meta: { icon: "i-carbon-face-dizzy-filled", hoverIcon: "i-carbon-user-favorite", groupHoverIcon: "group-hover:i-carbon-user-favorite", isActiveIcon: "[&.is-active_i]:i-carbon-user-favorite", topic: "个人思考", menuShow: true } },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
