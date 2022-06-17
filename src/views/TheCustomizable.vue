<template>
  <!-- todo 封装layout -->
  <div flex lg:flex-row flex-col>
    <el-scrollbar flex-1 shadow z-1>
      <markdownContent p-4 />
    </el-scrollbar>
    <!-- <el-divider block lg:hidden /> -->
    <!-- <div style="min-width: 300px;min-height: 300px;"> -->
    <el-scrollbar
      flex-1
      sm:flex-1
      xl:flex-1
      lg:w-sm
      lg:flex-initial
      bg-gray-600>
      <div lg:h-full p-4>
        <el-card>
          <template #header>演示效果一</template>
          <div name-whidy-2>I Love </div>
          <div name-YOU-5>I Love </div>
        </el-card>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import markdownContent from "./contents/Customizable.md";
</script>

<style scoped>
</style>
