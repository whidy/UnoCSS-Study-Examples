<template>
  <el-menu
    :default-active="routeName"
    :class="menuType === 'drawer' && 'p-0'"
    border-0
    h-full
    @select="handleSelect">
    <el-menu-item index="Customizable">
      <span>高可定制</span>
    </el-menu-item>
    <el-menu-item index="Shortcuts">
      <span>简写模式</span>
    </el-menu-item>
    <el-menu-item index="Attributify">
      <span>属性化模式</span>
    </el-menu-item>
    <el-menu-item index="CSSIcon">
      <span>纯CSS图标</span>
    </el-menu-item>
    <el-menu-item index="VariantGroups">
      <span>可变修饰分组</span>
    </el-menu-item>
    <el-menu-item index="CSSDirectives">
      <span>CSS指令</span>
    </el-menu-item>
    <el-menu-item index="Compilation">
      <span>编译模式</span>
    </el-menu-item>
    <el-menu-item index="Inspector">
      <span>调试模式</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { router } from "@/router";
const routeName = ref(router.currentRoute.value.name);
const props = defineProps({
  menuType: {
    type: String,
    default: ""
  },
  status: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(["toggleDrawer"]);

watch(router.currentRoute, (currentRoute) => {
  routeName.value = currentRoute.name;
});

const handleSelect = (index: string) => {
  if (props.menuType === "drawer") {
    emit("toggleDrawer", !props.status);
  }
  router.push(`/${index}`);
};
</script>

<style scoped>
</style>
