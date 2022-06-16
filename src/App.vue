<script lang="ts" setup>
import { useDark, useToggle, usePreferredDark } from "@vueuse/core";
import { router } from "./router";
// const prefersDark = usePreferredDark(); // 检测当前系统主题
const handleSelect = (index: string) => {
  router.push(`/${index}`);
};

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
<template>
  <el-container w-full>
    <el-header
      shadow
      flex
      items-center
      justify-between
      z-1>
      <h1 m-0 text-2xl>这是一个内部培训PPT配套代码演示和说明</h1>
      <!-- <div>{{ prefersDark }}</div> -->
      <div class="w-1/5 flex justify-end">
        <el-link i-mdi-theme-light-dark @click="toggleDark()" />
        <el-link
          ml-3
          i-mdi-github
          href="https://github.com/whidy/UnoCSS-Study-Examples"
          target="_blank" />
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="Customizable"
          border-0
          h-full
          active-text-color="#ffd04b"
          background-color="#545c64"
          text-color="#fff"
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
      </el-aside>
      <el-main h-full p-0 flex-1>
        <el-scrollbar>
          <router-view p-4 />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
</style>
