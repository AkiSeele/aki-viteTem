<!-- 菜单 -->
<template>
  <n-layout has-sider :embedded="true">
    <n-layout-sider
      style="background-color: #001428"
      bordered
      collapse-mode="width"
      :collapsed-width="65"
      :width="200"
      :collapsed="screenBoolean"
      show-trigger="bar"
      @collapse="screenBoolean = true"
      @expand="screenBoolean = false"
    >
      <div class="title">
        <img
          src="@/assets/image/tou.png"
          alt=""
          width="35"
          height="35"
          style="border-radius: 5px"
        />
        <span v-if="!screenBoolean" class="title_text selected"
          >AkiSeeleAdmin</span
        >
      </div>
      <n-menu
        ref="menuInstRef"
        v-model:value="StoreLayout.routerMenu"
        :inverted="true"
        :options="routerList"
        :collapsed="screenBoolean"
        key-field="name"
        :collapsed-width="65"
        :collapsed-icon-size="22"
        @update:value="lickLogin"
        @update:expanded-keys="funcTTT"
        :expanded-keys="roList"
      >
      </n-menu>
    </n-layout-sider>
    <n-layout-content>
      <!-- 头部组件 -->
      <HeadBar />
      <Breadcrumb @menuSelect="menuSelect" />
      <n-layout-content>
        <div class="warp">
          <n-watermark
            style="width: 100%;height: 100%;"
            content="AkiSeele"
            cross
            selectable
            font-color="rgba(128, 128, 128, .1)"
            :font-size="16"
            :line-height="16"
            :width="192"
            :height="128"
            :x-offset="12"
            :y-offset="28"
            :rotate="-20"
          >
            <router-view></router-view>
          </n-watermark>
        </div>
      </n-layout-content>
    </n-layout-content>
  </n-layout>
</template>

<script setup lang="ts">
import { HeadBar, Breadcrumb } from "../index";
// 配置菜单图标的，写法是直接拿的naive ui的，记得要下载@vicons/ionicons5
import { h, Component } from "vue";
import { NIcon, MenuOption, MenuInst } from "naive-ui";
import { HomeOutline } from "@vicons/ionicons5";
import { uselayoutRouStore } from "@/store/layoutrou";
import { debounce } from "@/utils/utils"

const router = useRouter();

// 菜单展开控制
const screenBoolean = ref<boolean>(false);
const StoreLayout = uselayoutRouStore();

const menuInstRef = ref<any>(null);
const selectedKeyRef = ref<string | unknown>("ErmeasListt");

const roList = ref<any[]>([]);

let routerList = ref<any>(router.options.routes);

// 这里就是路由那里说的手动加上首页的侧边
const index = routerList.value.findIndex((item: routerList) => {
  return item.label == "首页" && item.show != false;
});

if (index == -1) {
  routerList.value.unshift({
    label: "首页",
    name: "Home",
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

// 点击菜单面包使得对应菜单展开高亮显示
function menuSelect(data: string) {
  selectedKeyRef.value = data;
  menuInstRef.value.showOption(data);
}

// 菜单点击跳转路由，我根据name来的，记得不要重复了哦
function lickLogin(key: String, item: MenuOption) {
  // 菜单的值，用于高亮显示
  selectedKeyRef.value = item.name;
  // 菜单展开值
  menuInstRef.value?.showOption(key);
  // 当前点击的菜单index
  const index = StoreLayout.routerList.findIndex((it) => {
    return it.label == item.label;
  });
  if (index == -1 && StoreLayout.routerList.length < 11) {
    StoreLayout.routerList.push(item);
  }

  StoreLayout.routerData = item;
  StoreLayout.upRouterMenu(item.name);

  router.push({ name: `${item.name}` });

  const Rlist = StoreLayout.routerList;
  const Rindex = Rlist.findIndex((it) => {
    return it.name == item.name;
  });

  StoreLayout.upRouterActive(Rindex);
}

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

function funcTTT(keys: string[]) {
  roList.value = keys;
}

watch(
  () => router.currentRoute.value.name,
  (value) => {
    if (value == "Home") {
      roList.value = ["Index"];
    }
  },
  { immediate: true }
);

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

<style lang="scss" scoped>
.title {
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "黑体";
  box-sizing: border-box;

  &_text {
    margin-left: 8px;
    font-size: 16px;
    color: #fff;
  }
}
</style>
