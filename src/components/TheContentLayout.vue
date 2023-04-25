<template>
  <div flex flex-col lg:flex-row class="split-container">
    <el-scrollbar z-1 flex-1 shadow class="left-panel">
      <slot name="content"> 内容部分 </slot>
    </el-scrollbar>
    <el-scrollbar
      class="right-panel"
      :class="hasDemo ? '' : 'hidden'"
      h-64
      bg-gray-600
      lg:w-sm
      sm:h-auto
      sm:flex-1
      xl:flex-1
      lg:flex-initial
    >
      <div p-4 lg:h-full>
        <slot name="demo">
          <el-card>
            <template #header>演示效果</template>
            <div>暂无</div>
          </el-card>
        </slot>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  hasDemo: {
    type: Boolean,
    default: true,
  },
});
const hasDemo = props.hasDemo === undefined ? true : props.hasDemo;
</script>

<style scoped></style>
