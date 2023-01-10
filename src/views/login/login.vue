<template>
  <div class="login">
    <div class="card_login">
      <n-input v-model:value="loginForm.phone" placeholder="输入手机号" />
      <n-input v-model:value="loginForm.password" type="password" show-password-on="mousedown" />
      <n-button @click="Login">登录</n-button>
    </div>
  </div>

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
      StoreUser.updateName(res.data.profile.nickname, res.data.profile.avatarUrl)
      if (res.data.code === 200) {
        router.replace({ path: '/', })
      } else {
        console.log("走的这里");
        // message.warning('...')
      }
    })
    .catch((err) => {
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

<style scoped lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;

  .card_login {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 300px;
    height: 200px;
  }
}
</style>