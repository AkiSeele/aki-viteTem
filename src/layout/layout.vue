  <!-- 主体布局 -->
<template>
  <n-layout style="height: 100vh">
    <n-layout-header style="height: 50px; padding: 0px" bordered>
      <!-- 头部组件 -->
      <HeadBar />
    </n-layout-header>
    <n-layout position="absolute" style="top: 50px" has-sider>
      <!-- 侧边栏及主体组件 -->
      <SlideBar />
    </n-layout>

    <!-- 想要页脚可以自行增加 -->
  </n-layout>
</template>
<script setup lang="ts">

// 放index.ts中导出然后一起引入
import { HeadBar, SlideBar } from "../layout/index";

interface menuOption {
  children?: Array<any>;
  disabled?: boolean;
  extra?: string | (() => any);
  icon?: () => any;
  key: string;
  label: string | any;
  show?: boolean;
}
</script>

<style scoped lang="scss">
.test {
  color: $test-color;
}
</style>
