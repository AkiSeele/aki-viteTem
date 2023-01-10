<!-- 页面头部 -->
<template>
  <div class="breadcrumb">
    <div class="breadcrumbBox">
      <div v-for="(item, index) in StoreLayout.routerList" :key="index" class="breadcrumbBox_one"
        draggable="true"
        @dragstart="handleDragStart($event, items)"
        @dragover.prevent="handleDragOver($event, items)"
        @dragenter="handleDragEnter($event, items)"
        @dragend="handleDragEnd($event, items)"
        :class="{ 'textColorAvtice': StoreLayout.routerActive == index }">
        <span class="breadcrumbBox_one_text" @click="routerLiveTO(item, index)">{{ item.label }}</span>
        <n-icon class="breadcrumbBox_one_text" size="18" v-if="item.label !== '首页'" @click="delBread(item)">
          <CloseOutline />
        </n-icon>
      </div>
    </div>
    <div class="breadcrumb_two">
      <n-dropdown placement="bottom" trigger="hover" :options="optionsRig" @select="RigIconSelect">
        <n-icon class="breadcrumb_two_icon" size="18">
          <ChevronDownOutline />
        </n-icon>
      </n-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CloseOutline, ChevronDownOutline, RadioButtonOffOutline, StopOutline } from '@vicons/ionicons5'
import { uselayoutRouStore } from "@/store/layoutrou";
import type { Component } from 'vue'
import { NIcon } from 'naive-ui'
const router = useRouter();
const StoreLayout = uselayoutRouStore();
const optionsRigDis = ref(false)
const renderIcon = (icon: Component) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}
// 初始判断是否在首页，在的话禁用关闭当前选项
if (StoreLayout.routerActive == 0) {
  optionsRigDis.value = true
}

// 面包右边菜单项
const optionsRig = ref([
  {
    label: '关闭当前',
    key: "0",
    icon: renderIcon(CloseOutline),
    disabled: optionsRigDis,
  },
  {
    label: '关闭其他',
    key: '1',
    icon: renderIcon(StopOutline)
  },
  {
    label: '关闭全部',
    key: '2',
    icon: renderIcon(RadioButtonOffOutline)
  }
])

const emit = defineEmits(['menuSelect'])

// 监听 Pinia 的 StoreLayout
StoreLayout.$subscribe((mutation, state) => {
  if (StoreLayout.routerActive == 0) {
    optionsRigDis.value = true
  } else {
    optionsRigDis.value = false
  }
})

// 点击面包右侧菜单
const RigIconSelect = (value: string | number) => {
  // 关闭当前
  if (value == 0) {
    StoreLayout.routerList.splice(StoreLayout.routerActive, 1)  // 删除当前
    router.push({ name: 'Home' })                               // 路由跳转首页
    StoreLayout.upRouterActive(0)                               // 改变面包在第一项（首页）
  } else if (value == 1) {
    const arr = StoreLayout.routerList.splice(StoreLayout.routerActive, 1)  
    StoreLayout.routerList = arr                                              // 删除其他
    if (StoreLayout.routerActive == 0) {
      StoreLayout.upRouterActive(0)
    } else {
      StoreLayout.upRouterActive(1)
    }
    if (StoreLayout.routerList[0].label !== '首页') {
      StoreLayout.routerList.unshift({
        "label": "首页",
        "name": "Home",
        "path": "/"
      })
    }
    
  } else if (value == 2) {
    StoreLayout.routerList = [{
      "label": "首页",
      "name": "Home",
      "path": "/"
    }]
    router.push({ name: 'Home' })
    StoreLayout.upRouterActive(0)
  }
  
  const dataName = StoreLayout.routerList[StoreLayout.routerActive].name      // 获取当前面包的name
  StoreLayout.upRouterData(StoreLayout.routerList[StoreLayout.routerActive])  // 改变当前选中路由值
  StoreLayout.upRouterMenu(dataName)                                          // 改变当前菜单选中
  emit('menuSelect', dataName)                                                // 改变顶部面包屑
}

// 点击面包
function routerLiveTO(data: any, index: number) {
  router.push({ name: data.name })
  StoreLayout.upRouterActive(index)
  StoreLayout.upRouterData(data)
  StoreLayout.upRouterMenu(data.name)
  emit('menuSelect', data.name)
}

// 点击面包删除
function delBread(data: any) {
  // 判断index
  const index = StoreLayout.routerList.findIndex(it => {
    return it.label == data.label
  })

  // 删除当前选中的回到首页
  if (index == StoreLayout.routerActive) {
    router.push({ name: 'Home' })
    StoreLayout.upRouterActive(0)
    StoreLayout.upRouterData({
      "label": "首页",
      "name": "Home",
      "path": "/"
    })
    
    StoreLayout.upRouterMenu('Home')
  }

  if (index < StoreLayout.routerActive) {
    StoreLayout.upRouterActive(StoreLayout.routerActive - 1)
  }

  // 删除指定
  StoreLayout.routerList.splice(index, 1)

}

function handleDragStart(e: DragEvent, items) {

}
function handleDragOver() {

}
function handleDragEnter() {

}
function handleDragEnd() {

}
</script>

<style scoped lang="scss">
.breadcrumb {
  box-sizing: border-box;
  padding: 0 0 0 10px;
  background: #F0F2F5;
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  overflow: hidden;

  .breadcrumbBox {
    width: calc(100% - 46px);
    display: flex;

    &_one {
      box-sizing: border-box;
      height: 30px;
      background: $tabs-back-color;
      padding: 4px 16px 4px;
      border-radius: 3px;
      margin-right: 6px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      &_text {
        white-space: nowrap;
      }
    }
  }

  &_two {
    width: 40px;
    height: 30px;
    // background: red;
    z-index: 100;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;

    &_icon {
      z-index: 101;
      padding-right: 10px;
    }
  }
}

.textColorAvtice {
  color: #2d8cf0 !important;

}
</style>
