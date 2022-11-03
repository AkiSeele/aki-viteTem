<template>
  <n-layout has-sider>
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      show-trigger
    >
      <n-menu :options="routerList" @update:value="lickLogin"> </n-menu>
    </n-layout-sider>
    <n-layout-content>
      <router-view class="c-main"></router-view>
    </n-layout-content>
  </n-layout>
</template>

<script setup lang="ts">
import { h, Component } from "vue";
import { NIcon } from "naive-ui";
import { HomeOutline } from "@vicons/ionicons5";


function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}


const router = useRouter();


let routerList = ref<any>(router.options.routes);

routerList.value.unshift({ label: "首页", name: "Index", path: "/", icon: renderIcon(HomeOutline),});

console.log(routerList.value);

function lickLogin(data: String) {
  router.push({ name: `${data}` })
}


</script>
