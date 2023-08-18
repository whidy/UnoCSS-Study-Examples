<template>
  <el-menu
    :default-active="activedItem"
    :class="menuType === 'drawer' && 'p-0'"
    h-full
    border-0
    @select="handleSelect">
    <el-menu-item
      v-for="item in menu"
      :key="item.name"
      class="group flex items-center text-sm decoration-none space-x-2 [&.is-active_i]:text-$rb-brand [&.is-active_span]:text-$rb-brand [&.is-active]:text-$rb-brand"
      :class="`[&.is-active_i]:${item.hoverIcon}`"
      :index="item.name"
      :route="item">
      <i
        class="text-dark dark:text-white group-hover:text-$rb-brand"
        :class="`${item.icon} group-hover:${item.hoverIcon}`"></i><span class="text-dark dark:text-white group-hover:text-$rb-brand">{{
          item.topic
        }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { router } from "@/router";

interface MenuItem {
  name: string;
  path: string;
  icon: string;
  hoverIcon: string;
  // groupHoverIcon: string;
  // isActiveIcon: string;
  topic: string;
  menuShow: false;
}

const routeName = router.currentRoute.value.name as string;
const activedItem = ref(routeName);
const props = defineProps({
  menuType: {
    type: String,
    default: "",
  },
  status: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["toggleDrawer"]);

watch(router.currentRoute, (currentRoute) => {
  activedItem.value = currentRoute.name as string;
});

const menu = computed(() => {
  const routeList = router.getRoutes().filter((item) => item.meta.menuShow);
  return routeList.map((item) => {
    return {
      name: item.name,
      path: item.path,
      ...item.meta,
    } as MenuItem;
  });
});

const handleSelect = (index: string) => {
  if (props.menuType === "drawer") {
    emit("toggleDrawer", !props.status);
  }
  router.push(`/${index}`);
};
</script>

<style scoped>
/* .is-active,
.is-active span,
.is-active i {
  color: var(--rb-brand);
} */
</style>
