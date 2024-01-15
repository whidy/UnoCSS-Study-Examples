<template>
  <!-- 这个是为了构建时能识别到的icon数据 i-carbon-3d-print-mesh i-carbon-product i-carbon-bat i-carbon-router -->
  <the-content-layout>
    <template #content>
      <markdownContent p-4 />
    </template>
    <template #demo>
      <el-card>
        <template #header> 来自不同Icon Collection的示例 </template>
        <ul
          flex
          flex-col
          p-0
          rainbow-content
          space-y-4>
          <li flex items-center space-x-2>
            <a href="https://icones.js.org/collection/carbon">Carbon:</a><span i-carbon:linux-alt text-blue dark:text-emerald></span><span i-carbon:fingerprint-recognition rainbow-text></span><span i-carbon:face-dizzy-filled text-red dark:text-orange></span>
          </li>
          <li flex items-center space-x-2>
            <a href="https://icones.js.org/collection/mdi">Material Design Icons:</a><span i-mdi:alarm-light text-blue dark:text-emerald></span><span i-mdi:cash-usd-outline rainbow-text></span><span i-mdi:pinwheel text-red dark:text-orange></span>
          </li>
          <li flex items-center space-x-2>
            <a href="https://icones.js.org/collection/ep">Element Plus:</a><span i-ep:sunny text-blue dark:text-emerald></span><span i-ep:cpu rainbow-text></span><span i-ep:toilet-paper text-red dark:text-orange></span>
          </li>
        </ul>
      </el-card>
      <el-card>
        <template #header> 动态加载的ICON </template>
        <div flex>
          <span text-4xl :class="`i-carbon-${iconNameRef}`"></span>
        </div>
        <div flex>
          <span text-4xl :class="`${iconName}`"></span>
        </div>
      </el-card>
    </template>
  </the-content-layout>
</template>

<script setup lang="ts">
import markdownContent from "./contents/CSSIcon.md";
// 如果没有顶部的预加载的固定icon，下面这些都没用。
// default icon cannot load
const iconNameRef = ref("3d-print-mesh");
let iconName = "i-carbon-" + "product";
setTimeout(() => {
  // but this bat can be shown --- 糟糕，开发环境下有效，生产环境无效。
  iconNameRef.value = "bat";
  iconName = "i-carbon-" + "router";
}, 1000);
</script>

<style scoped></style>
