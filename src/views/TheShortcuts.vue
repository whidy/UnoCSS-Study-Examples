<template>
  <the-content-layout>
    <template #content>
      <markdownContent p-4 />
    </template>
    <template #demo>
      <el-card>
        <template #header>演示效果一（静态）</template>
        <div my-2>
          <span gradient-header> Simple Gradient Header </span>
        </div>
      </el-card>
      <el-card>
        <template #header>演示效果二（动态）</template>
        <div my-2>
          <span gradient-teal-blue>I Love Whidy</span>
        </div>
        <div my-2>
          <span gradient-red-yellow>Hello Smart Boy</span>
        </div>
      </el-card>
    </template>
  </the-content-layout>
</template>

<script setup lang="ts">
import markdownContent from "./contents/Shortcuts.md";
</script>

<style scoped></style>
