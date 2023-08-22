<template>
  <the-content-layout>
    <template #content>
      <markdownContent p-4 />
    </template>
    <template #demo>
      <el-card>
        <template #header> 动态加载的类名 </template>
        <ul
          v-for="(i, index) in rankTextColorList"
          :key="index"
          class="list-none pl-0">
          <!-- #1 don't use this -->
          <!-- <li>{{ index + 1 }}. <span :class="comp(index)">I Love Whidy</span></li> -->
          <!-- use this -->
          <li>{{ index + 1 }}. <span :class="i">I Love Whidy</span></li>
        </ul>
      </el-card>
    </template>
  </the-content-layout>
</template>

<script setup lang="ts">
import markdownContent from "./contents/Thinkings.md";
// #1 don't use this
const comp = (index: number) => `text-red-${index + 1}00`;
// #2 use this
const rankTextColorList = [
  "text-red-100",
  "text-red-200",
  "text-red-300",
  "text-red-400",
  "text-red-500",
];
</script>

<style scoped></style>
