<!-- 页面头部 -->
<template>
  <div class="header">
    <div class="header_left">
      <div class="header_left_box">
        <SvgIcon name="genshin" style="width: 25px; height: 25px; color: red" @click="labelFunRoute = ['asdasd ']" />
        <n-breadcrumb>
          <template v-if="StoreLayout.routerData.label !== '首页'">
            <n-breadcrumb-item v-for="(it, index) in labelFunRoute" :key="index">
              {{ it }}
            </n-breadcrumb-item>
          </template>
          <n-breadcrumb-item>
            {{ StoreLayout.routerData.label }}
          </n-breadcrumb-item>
        </n-breadcrumb>
      </div>
      <n-popselect v-model:value="tokenLogin" @update:value="tokenLoginAki" :options="options" trigger="click">
        <n-avatar round size="medium" :src="StoreUser.imgUrl" />
      </n-popselect>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from "@/components/SvgIcon.vue";
import { useUserStore } from "@/store/user";
import { uselayoutRouStore } from "@/store/layoutrou";
const router = useRouter();
const StoreUser = useUserStore();
const StoreLayout = uselayoutRouStore();
const tokenLogin = ref<string | number>("");
let labelFunRoute = ref<string[]>([])
const options = [
  {
    label: "退出登陆",
    value: 1,
  },
];

if (StoreUser.name == "") {
  console.log(StoreUser.name);

  router.push({ path: "/login" });
}

function tokenLoginAki(
  value: string | number | Array<string | number> | null,
  option: any | null
) {
  if (value === 1) {
    router.push({ path: "/login" });
    // 清空StoreUser里是所有用户信息
    StoreUser.$reset();
  }
}

const subscribe = StoreLayout.$subscribe((mutation, state) => {
  /*
  * mutation主要包含三个属性值：
  *   events：当前state改变的具体数据，包括改变前的值和改变后的值等等数据
  *   storeId：是当前store的id
  *   type：用于记录这次数据变化是通过什么途径，主要有三个分别是
  *         “direct” ：通过 action 变化的
            ”patch object“ ：通过 $patch 传递对象的方式改变的
            “patch function” ：通过 $patch 传递函数的方式改变的
  *
  * */

  labelFunRoute.value = RouterRunfn(state.routerData.label)

}, { detached: false })  //第二个参数options对象，是各种配置参数

/* watch(
  labelFunRoute,
  (value, oldValue) => {
    console.log(value);
  }
) */

function RouterRunfn(data: string) {
  let name = "";
  let nameT = "";
  let indexTop: number | string = '';

  const list = <any>router.options.routes
  list.map((item: any, zzz: number) => {
    if (item.children) {
      const index = item.children.findIndex((it: any) => {
        return it.label == data
      })
      if (index > -1) {
        indexTop = zzz
      } else {
        let indexZZZ: number | string = '';
        item.children.map((item3: any, fff: number) => {
          if (item3.children) {
            const index3 = item3.children.findIndex((i: any) => {
              return i.label == data
            })
            if (index3 > -1) {
              indexZZZ = fff
            }
          }
        })
        let name2 = "";
        if (item.children[indexZZZ]) {
          name2 = item.children[indexZZZ].label
        }
        nameT = list[zzz].label + "/" + name2
        // nameT = list[zzz].label
      }
    }
  })
  if (indexTop) {
    name = list[indexTop].label
  } else {
    name = nameT
  }

  // labelFunRoute.value = name.split('/')
  return name.split('/')
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 65px;
  // background: $back-color-main;
  background: #ffffff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

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

      &_title {
        margin-left: 10px;
      }
    }
  }
}
</style>
