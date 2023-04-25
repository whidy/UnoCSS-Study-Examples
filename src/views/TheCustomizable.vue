<template>
  <the-content-layout>
    <template #content>
      <markdownContent p-4 />
    </template>
    <template #demo>
      <el-card>
        <template #header>演示效果一</template>
        <div name-whidy-2>I Love</div>
        <div name-YOU-5>I Love</div>
      </el-card>
    </template>
  </the-content-layout>
</template>

<script setup lang="ts">
import markdownContent from "./contents/Customizable.md";
</script>

<style scoped></style>
