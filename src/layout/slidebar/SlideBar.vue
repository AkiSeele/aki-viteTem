<!-- 菜单 -->
<template>
  <n-layout has-sider>
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="50"
      :width="240"
      :collapsed="screenBoolean"
      show-trigger
      @collapse="screenBoolean = true"
      @expand="screenBoolean = false"
    >
      <n-menu
        :options="routerList"
        :collapsed="screenBoolean"
        :collapsed-width="50"
        :collapsed-icon-size="22"
        @update:value="lickLogin"
      >
      </n-menu>
    </n-layout-sider>
    <n-layout-content>
      <div class="warp">
        <router-view></router-view>
      </div>
    </n-layout-content>
  </n-layout>
</template>

<script setup lang="ts">
// 配置菜单图标的，写法是直接拿的naive ui的，记得要下载@vicons/ionicons5
import { h, Component } from "vue";
import { NIcon, MenuOption } from "naive-ui";
import { HomeOutline } from "@vicons/ionicons5";

const router = useRouter();

// 菜单展开控制
const screenBoolean = ref<boolean>(false);

let routerList = ref<any>(router.options.routes);

// 这里就是路由那里说的手动加上首页的侧边
const index = routerList.value.findIndex((item: routerList) => {
  return item.label == "首页" && item.show != false;
});

if (index == -1) {
  routerList.value.unshift({
    label: "首页",
    name: "Index",
    path: "/",
    icon: renderIcon(HomeOutline),
  });
}

// 监听窗口变化，收起或展开菜单 debounce为防抖函数
window.onresize = debounce(() => {
  const a = document.body.clientWidth;
  if (a <= 1024) {
    screenBoolean.value = true;
  } else {
    screenBoolean.value = false;
  }
}, 50);

// 菜单点击跳转路由，我根据name来的，记得不要重复了哦
function lickLogin(key: String, item: MenuOption) {
  router.push({ name: `${item.name}` });
}

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

// 复制的防抖函数
function debounce(fn: Function, delay: number) {
  let time: any = null;
  let timer: any = null;
  let newTime = null;
  function task() {
    newTime = +new Date();
    if (newTime - time < delay) {
      timer = setTimeout(task, delay);
    } else {
      fn();
      timer = null;
    }
    time = newTime;
  }
  return function () {
    // 更新时间戳
    time = +new Date();
    if (!timer) {
      timer = setTimeout(task, delay);
    }
  };
}

interface routerList {
  children: any[];
  label: string;
  meta: { title: string };
  name: string;
  path: string;
  redirect: string;
  show: boolean;
}
</script>
