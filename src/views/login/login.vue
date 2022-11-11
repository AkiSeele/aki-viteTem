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
import { useUserStore } from "@/store/user";
import router from "@/router";

const loginForm = reactive({
  phone: "",
  password: "",
});

const StoreLing = userAkiStore();
const StoreUser = useUserStore();

const loadingBar = useLoadingBar()
// const message = useMessage()
async function GetDateShang(data: LoginAki) {
  loadingBar.start()
  return await StoreLing.userLogin(data)
    .then((res) => {
      loadingBar.finish()
      StoreUser.updateName(res.data.profile.nickname,res.data.profile.avatarUrl)
      if(res.data.code === 200) {
        router.replace({path: '/',})
      } else {
        // message.warning('...')
      }
    })
    .then((err) => {
      loadingBar.error()
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
