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
      ref="itemRefs"
      class="group flex items-center text-sm decoration-none space-x-2"
      :index="item.name"
      :route="item">
      <!-- 这段注释掉的的代码，虽然可以生成相同的代码，但是并不能显示icon -->
      <!-- <i
        class="text-dark dark:text-white hover:text-cyan"
        :class="item.icon + ' group-hover:' + item.hoverIcon"></i><span text-dark dark:text-white>{{ item.topic }}</span> -->
      <i class="text-dark dark:text-white hover:text-cyan"></i><span text-dark dark:text-white>{{ item.topic }}</span>
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
  topic: string;
  menuShow: false;
}

interface RefItemOfMenu {
  $el: HTMLElement;
  route: {
    icon: string;
    hoverIcon: string;
  };
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

const itemRefs: Ref = ref([]);

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

// const iconShowsDelay = async(routeItem: {
//   name?: RouteRecordName | undefined;
//   path?: string;
//   icon?: any;
//   hoverIcon?: any;
// }) => {
//   const result = await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // console.log(routeItem.icon);
//       resolve(`${routeItem.icon} group-hover:${routeItem.hoverIcon}`);
//     }, 1000);
//   });
//   return result;
// };

onMounted(() => {
  // 这个方案虽然不是很好，但是似乎目前也只能这样了？ --- 糟糕，开发环境下有效，生产环境无效。
  itemRefs.value.forEach((item: RefItemOfMenu) => {
    const iconElement = item.$el!.querySelector("i");
    iconElement!.classList.add(
      item.route.icon,
      `group-hover:${item.route.hoverIcon}`,
    );
  });
});
</script>

<style scoped>
.is-active,
.is-active span,
.is-active i {
  color: var(--rb-brand);
}
</style>
