<template>
  <div
    flex
    flex-col
    rainbow-content
    lg:flex-row
    class="split-container">
    <el-scrollbar
      z-1
      class="left-panel"
      :style="{ width: hasDemo ? leftPanelWidth + 'px' : '100%' }">
      <slot name="content"> 内容部分 </slot>
    </el-scrollbar>
    <template v-if="hasDemo">
      <div
        w-2
        cursor-ew-resize
        bg-slate-100
        dark:bg-black
        hover:bg-slate-200
        hover:dark:bg-gray-900
        @mousedown="startResize"></div>
      <el-scrollbar
        class="right-panel"
        h-64
        bg-gray-600
        lg:w-sm
        sm:h-auto
        sm:flex-1
        xl:flex-1
        lg:flex-initial>
        <div p-4 lg:h-full>
          <slot name="demo">
            <el-card>
              <template #header>演示效果</template>
              <div>暂无</div>
            </el-card>
          </slot>
        </div>
      </el-scrollbar>
    </template>
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

const resizing = ref(false);
const leftPanelWidth = ref(0);

const startResize = () => {
  resizing.value = true;

  document.addEventListener("mousemove", handleResize);
  document.addEventListener("mouseup", stopResize);
};
const handleResize = (event: MouseEvent) => {
  if (resizing.value) {
    leftPanelWidth.value =
      event.clientX -
      (document.querySelector<HTMLElement>(".el-aside")!.offsetWidth +
        1 +
        8 / 2);
  }
};
const stopResize = () => {
  resizing.value = false;

  // 移除鼠标移动和释放事件的绑定
  document.removeEventListener("mousemove", handleResize);
  document.removeEventListener("mouseup", stopResize);
};

onMounted(() => {
  leftPanelWidth.value =
    document.querySelector<HTMLElement>(".split-container")!.offsetWidth / 2;
});
</script>

<style scoped></style>
