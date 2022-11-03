<template>
  <div>
    <h1 class="test">首页index</h1>
    <h2>Store： {{ userStore.name }}</h2>
    <SvgIcon name="genshin" style="width: 50px; height: 50px" />
    <n-button type="info" @click="lickLogin"> 跳转到登陆页面 </n-button>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/store/user";
import SvgIcon from "@/components/SvgIcon.vue";
const userStore = useUserStore();
const router = useRouter();
function lickLogin() {
  router.push("/login");
}
</script>

<style scoped lang="scss">
.test {
  color: $test-color;
}
</style>
