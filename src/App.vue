<template>
  <!-- 放置路由容器 -->
  <div id="app">
    <n-config-provider :theme-overrides="themeOverrides">
      <RouterView />
    </n-config-provider>
  </div>
  
</template>

<script setup lang="ts">
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui'

// naive ui的主题修改，详情可查看官网
// 其他可修改变量可查看GlobalThemeOverrides变量的提示
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#5593F9'
  },
  Button: {
    textColor: '#5593F9',
  }
}
</script>

<style scoped>
</style>
