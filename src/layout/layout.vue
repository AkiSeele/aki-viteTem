<template>
  <n-space vertical size="large">
    <n-layout has-sider style="height: 100vh">
      <SlideBar />
    </n-layout>
  </n-space>
</template>
<script setup lang="ts">
// 放index.ts中导出然后一起引入
import { SlideBar } from "../layout/index";

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
