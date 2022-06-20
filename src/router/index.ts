import { createRouter, createWebHashHistory } from "vue-router";
import Shortcuts from "@/views/TheShortcuts.vue";
import Attributify from "@/views/TheAttributify.vue";
import CSSIcon from "@/views/TheCSSIcon.vue";
import VariantGroups from "@/views/TheVariantGroups.vue";
import CSSDirectives from "@/views/TheCSSDirectives.vue";
import Compilation from "@/views/TheCompilation.vue";
import Inspector from "@/views/TheInspector.vue";
import Customizable from "@/views/TheCustomizable.vue";

const routes = [
  { path: "/", redirect: "/Customizable" },
  { path: "/Customizable", name: "Customizable", component: Customizable },
  { path: "/Shortcuts", name: "Shortcuts", component: Shortcuts },
  { path: "/Attributify", name: "Attributify", component: Attributify },
  { path: "/CSSIcon", name: "CSSIcon", component: CSSIcon },
  { path: "/VariantGroups", name: "VariantGroups", component: VariantGroups },
  { path: "/CSSDirectives", name: "CSSDirectives", component: CSSDirectives },
  { path: "/Compilation", name: "Compilation", component: Compilation },
  { path: "/Inspector", name: "Inspector", component: Inspector },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
