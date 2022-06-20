<script lang="ts" setup>
import { useDark, useToggle, useWindowSize, usePreferredDark } from "@vueuse/core";
import type { Ref } from "vue";
const drawerStatus = ref(false);
// const { width } = useWindowSize();
const header = ref<Ref | null | HTMLDivElement>(null);
const headerHeight = ref(48);
// const prefersDark = usePreferredDark(); // 检测当前系统主题
const handleToggle = () => {
  drawerStatus.value = !drawerStatus.value;
};
const isDark = useDark();
const toggleDark = useToggle(isDark);
onMounted(() => {
  headerHeight.value = header.value.$el.clientHeight;
});
// watch(width, (newHeight) => {
//   headerHeight.value = header.value.$el.clientHeight;
// });
</script>
<template>
  <el-drawer
    v-model="drawerStatus"
    size="50%"
    title="迷你菜单"
    direction="ltr">
    <VMenu menu-type="drawer" :status="drawerStatus" @toggle-drawer="handleToggle()" />
  </el-drawer>
  <el-container w-full flex>
    <el-header
      ref="header"
      h-10
      sm:text-2xl
      text-base
      sm:h-12
      px-2
      sm:px-4
      shadow
      flex
      items-center
      justify-between
      z-5>
      <div flex justify-start items-center>
        <div
          i-carbon-menu
          block
          sm:hidden
          w-4
          sm:w-6
          mr-2
          @click="handleToggle()"></div>
        <div m-0 truncate>UnoCSS技术分享代码演示和说明</div>
      </div>
      <!-- <div>{{ prefersDark }}</div> -->
      <div class="w-1/6 flex justify-end">
        <el-link
          i-mdi-theme-light-dark
          w-5
          sm:w-6
          @click="toggleDark()" />
        <el-link
          i-mdi-github
          ml-3
          w-5
          sm:w-6
          href="https://github.com/whidy/UnoCSS-Study-Examples"
          target="_blank" />
      </div>
    </el-header>
    <el-container overflow-hidden>
      <el-aside sm:w-40 sm:block hidden>
        <VMenu />
      </el-aside>
      <el-main p-0>
        <router-view :style="`height:calc(100vh - ${headerHeight}px)`" />
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-drawer__header {
  @apply mb-4;
}

.el-drawer__body {
  @apply p-0;
}

.el-card {
  @apply mb-4;
}
</style>
