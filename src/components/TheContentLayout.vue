<template>
  <div
    flex
    flex-col
    rainbow-content
    lg:flex-row
    class="split-container">
    <el-scrollbar z-1 min-w="360px" :style="initDimensions">
      <!-- {{ hasDemo }}, {{ resizing }}, {{ mainPanelDimensions }}, {{ domWidth }} -->
      <slot name="content"> 内容部分 </slot>
    </el-scrollbar>
    <template v-if="hasDemo">
      <div
        ref="handlerbar"
        h-2
        cursor-ns-resize
        bg-slate-100
        lg:h-full
        lg:w-2
        lg:cursor-ew-resize
        dark:bg-black
        hover:bg-slate-200
        hover:dark:bg-gray-900
        @mousedown="startResize"></div>
      <el-scrollbar
        lg="h-full min-w-96"
        flex-1
        bg-gray-600
        min-h="360px">
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
import { defineStore } from "pinia";

const useStore = defineStore("config", {
  state: () => {
    return {
      domWidth: 0,
      mainPanelDimensions: 0,
    };
  },
});
const store = useStore();
const props = defineProps({
  hasDemo: {
    type: Boolean,
    default: true,
  },
});

const handlerbar = ref<null | HTMLElement>(null);
const hasDemo = props.hasDemo === undefined ? true : props.hasDemo;

const domWidth = ref(window.innerWidth);
const resizing = ref(false);
const mainPanelDimensions = ref(0);
const initDimensions = computed(() => {
  if (!hasDemo) return "width: 100%";
  return `${domWidth.value < 1024 ? "height" : "width"}: ${mainPanelDimensions.value}px`;
});
const startResize = (event: MouseEvent) => {
  event.preventDefault();
  event.stopPropagation();
  if (event.target !== handlerbar.value) {
    return;
  }
  resizing.value = true;

  document.addEventListener("mousemove", handleResize);
  document.addEventListener("mouseup", stopResize);
};
const handleResize = (event: MouseEvent) => {
  if (resizing.value) {
    if (domWidth.value < 1024) {
      // lg
      mainPanelDimensions.value =
        event.clientY -
        document.querySelector<HTMLElement>(".el-header")!.offsetHeight;
    } else {
      mainPanelDimensions.value =
        event.clientX -
        (document.querySelector<HTMLElement>(".el-aside")!.offsetWidth +
          1 +
          8 / 2); // sidebar width + border width + handlerbar width
    }
    store.mainPanelDimensions = mainPanelDimensions.value;
  }
};
const stopResize = () => {
  resizing.value = false;
  document.removeEventListener("mousemove", handleResize);
  document.removeEventListener("mouseup", stopResize);
};

const updateDomWidth = () => {
  domWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", updateDomWidth);
  nextTick(() => {
    if (store.mainPanelDimensions > 0) {
      mainPanelDimensions.value = store.mainPanelDimensions;
      return;
    }
    mainPanelDimensions.value =
      document.querySelector<HTMLElement>(".split-container")!.offsetWidth / 2;
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", updateDomWidth);
});
</script>

<style scoped>
</style>
