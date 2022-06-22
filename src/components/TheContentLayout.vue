<template>
  <div flex lg:flex-row flex-col>
    <el-scrollbar flex-1 shadow z-1>
      <slot name="content">
        内容部分
      </slot>
    </el-scrollbar>
    <el-scrollbar
      :class="hasDemo ? '' : 'hidden'"
      h-64
      sm:h-auto
      sm:flex-1
      xl:flex-1
      lg:w-sm
      lg:flex-initial
      bg-gray-600>
      <div lg:h-full p-4>
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
  }
});
const hasDemo = props.hasDemo === undefined ? true : props.hasDemo;
</script>

<style scoped>

</style>
