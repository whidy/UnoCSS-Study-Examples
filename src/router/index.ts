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

const routes = [
  { path: "/", redirect: "/Intro", meta: { icon: "i-carbon-book", hoverIcon: "i-carbon-face-satisfied", topic: "前言", menuShow: false } },
  { path: "/Intro", name: "Intro", component: Intro, meta: { icon: "i-carbon-book", hoverIcon: "i-carbon-notebook-reference", topic: "前言", menuShow: true } },
  { path: "/Customizable", name: "Customizable", component: Customizable, meta: { icon: "i-carbon-ibm-toolchain", hoverIcon: "i-carbon-ibm-toolchain", topic: "高可定制", menuShow: true } },
  { path: "/Shortcuts", name: "Shortcuts", component: Shortcuts, meta: { icon: "i-carbon-asset", hoverIcon: "i-carbon-asset", topic: "简写模式", menuShow: true } },
  { path: "/Attributify", name: "Attributify", component: Attributify, meta: { icon: "i-carbon-code", hoverIcon: "i-carbon-code", topic: "属性化模式", menuShow: true } },
  { path: "/CSSIcon", name: "CSSIcon", component: CSSIcon, meta: { icon: "i-carbon-face-wink", hoverIcon: "i-carbon-face-satisfied", topic: "纯CSS图标", menuShow: true } },
  { path: "/VariantGroups", name: "VariantGroups", component: VariantGroups, meta: { icon: "i-carbon-group-objects", hoverIcon: "i-carbon-group-objects", topic: "可变修饰分组", menuShow: true } },
  { path: "/CSSDirectives", name: "CSSDirectives", component: CSSDirectives, meta: { icon: "i-carbon-at", hoverIcon: "i-carbon-at", topic: "CSS指令", menuShow: true } },
  { path: "/Compilation", name: "Compilation", component: Compilation, meta: { icon: "i-carbon-tree-view-alt", hoverIcon: "i-carbon-tree-view-alt", topic: "编译模式", menuShow: true } },
  { path: "/Inspector", name: "Inspector", component: Inspector, meta: { icon: "i-carbon-inspection", hoverIcon: "i-carbon-inspection", topic: "调试模式", menuShow: true } },
  { path: "/Thinkings", name: "Thinkings", component: Thinkings, meta: { icon: "i-carbon-face-dizzy-filled", hoverIcon: "i-carbon-user-favorite", topic: "个人思考", menuShow: true } },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
