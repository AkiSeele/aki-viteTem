<template>
  <div v-if="StoreUser.name">
    <img :src="StoreUser.imgUrl" style="width: 100px;height: 100px;border-radius: 50%;" />
    <h1 class="test">{{ StoreUser.name }}</h1>
    <div>{{ StoreUser.name }}</div>
  </div>
  <div>
    <n-input v-model:value="loginForm.phone" placeholder="输入姓名" />
    <n-input v-model:value="loginForm.password" type="password" show-password-on="mousedown"/>
  </div>

  <n-button @click="Login">登录</n-button>
</template>

<script setup lang="ts">
import { userAkiStore } from "@/api/test/login";
import router from "@/router";
import { useUserStore } from "@/store/user";
import path from "path";

const loginForm = reactive({
  phone: "",
  password: "",
});

const StoreLing = userAkiStore();
const StoreUser = useUserStore();

async function GetDateShang(data: LoginAki) {
  return await StoreLing.userLogin(data)
    .then((res) => {
      StoreUser.updateName(res.data.profile.nickname,res.data.profile.avatarUrl)
      if(res.data.code === 200) {
        router.push({path: '/',})
      }
    })
    .then((err) => {
      return err;
    });
}
function Login() {
  GetDateShang(loginForm);
}

interface LoginAki {
  /**手机 */
  phone: string;
  /**密码 */
  password: string;
}
</script>
