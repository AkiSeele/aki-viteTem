<template>
  <n-layout style="height: 100vh">
    <n-layout-header style="height: 50px; padding: 0px" bordered>
      <HeadBar />
    </n-layout-header>
    <n-layout position="absolute" style="top: 50px" has-sider>
      <SlideBar />
    </n-layout>
  </n-layout>
</template>
<script setup lang="ts">
import { HeadBar, SlideBar, AppMain } from "../layout/index";

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
