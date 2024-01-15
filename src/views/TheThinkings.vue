<template>
  <the-content-layout>
    <template #content>
      <markdownContent p-4 />
    </template>
    <template #demo>
      <el-card>
        <template #header> 动态加载的类名 </template>
        <ul
          v-for="(name, index) in rankPeople"
          :key="index"
          class="list-none pl-0">
          <!-- #1 don't use this -->
          <li class="flex items-center">
            <i class="mr-2" :class="`i-mdi-numeric-${rankIcon[index]}-box`"></i>
            <!-- 你在页面上虽然看到颜色了但是实际是障眼法。 -->
            <span :class="comp(index)">I Love {{ rankPeople[index] }}</span>
          </li>
          <!-- use this -->
          <li class="mt-2">
            {{ index + 1 }}.
            <span :class="rankTextColorList[index]">{{ name }}</span>
          </li>
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
const rankPeople = ["Whidy", "Tom", "Lucy", "Teddy", "Somebody"];
const rankIcon = ["1", "2", "3", "4", "5"];

const rankTextColorList = [
  "text-red-500",
  "text-red-400",
  "text-red-300",
  "text-red-200",
  "text-red-100",
];
</script>

<style scoped></style>
