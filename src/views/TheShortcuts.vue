<template>
  <div flex flex-col>
    <el-scrollbar flex-1>
      <markdownContent />
    </el-scrollbar>
    <el-divider />
    <div style="min-height: 300px;">
      <span whidy-2>I love </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import markdownContent from "./contents/Shortcuts.md";
// import { router } from "@/router";
// const { name } = toRaw(router.currentRoute.value);
// const Content = () => import(`./contents/${name}.md`);

</script>

<style scoped>
</style>
