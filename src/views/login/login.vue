<template>
  <div v-if="userData">
    <img :src="userData.avatarUrl" style="width: 100px;height: 100px;border-radius: 50%;" />
    <h1 class="test">{{ userData.nickname }}</h1>
    <div>{{ userData.signature }}</div>
  </div>
  <div>
    <input v-model="loginForm.phone" />
    <input v-model="loginForm.password" type="password" />
  </div>

  <button @click="Login">登录</button>
</template>

<script setup lang="ts">
import { userAkiStore } from "@/api/test/login";

const loginForm = reactive({
  phone: "",
  password: "",
});

const StoreLing = userAkiStore();
const userData = ref()

async function GetDateShang(data: LoginAki) {
  return await StoreLing.userLogin(data)
    .then((res) => {
      userData.value = res.data.profile
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
