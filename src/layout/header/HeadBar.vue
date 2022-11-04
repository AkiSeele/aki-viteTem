<!-- 页面头部 -->
<template>
  <div class="header">
    <div class="header_left">
      <div class="header_left_box">
        <SvgIcon name="genshin" style="width: 25px; height: 25px" />
        <div class="header_left_box_title">AkiSeele的模板测试系统</div>
      </div>
      <n-popselect 
      v-model:value="tokenLogin" 
      @update:value="tokenLoginAki" 
      :options="options" 
      trigger="click">
        <n-avatar
          round
          size="medium"
          :src="StoreUser.imgUrl"
        />
      </n-popselect>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from "@/components/SvgIcon.vue";
import { useUserStore } from "@/store/user";

const router = useRouter();
const StoreUser = useUserStore();
const tokenLogin = ref<string | number>("");
const options = [
  {
    label: "退出登陆",
    value: 1,
  },
];

function tokenLoginAki(value: string | number | Array<string | number> | null, option: any | null) {
  if(value === 1) {
    router.push({ path: "/login" });
    // 清空StoreUser里是所有用户信息
    StoreUser.$reset()
  }
}

</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 100%;
  background: $back-color-main;
  &_left {
    padding: 0 20px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &_box {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      &_title {
        margin-left: 10px;
      }
    }
  }
}
</style>
