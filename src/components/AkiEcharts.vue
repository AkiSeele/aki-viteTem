<template>
  <div style="height: 100%">
    <n-card v-resize="resizeOf" style="height: 100%;">
      <slot name="content" :Uid="Uid"> </slot>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { debounce } from "@/utils/utils";

let Echarts: any;
const props = defineProps({
  options: {
    type: Object,
    default: {},
  },
  Uid: {
    type: String,
    default: "",
  },
});

const { options } = toRefs(props);

nextTick(() => {
  initChart();
});
watch(
  () => options,
  (value, oldvalue) => {
    console.log(value);
    Echarts.setOption(value);
  },
  { deep: true }
);

// 基础配置一下Echarts
function initChart() {
  Echarts = echarts.init(document.getElementById(props.Uid)!);
  // 把配置和数据放这里
  Echarts.setOption(options.value);
}

// 自定义指令监听宽高变化，来重置图表
const resizeOf = debounce(() => {
  Echarts.resize();
}, 0);

const vResize = {
  beforeMount(el: any, binding: any) {
    // el为绑定的元素，binding为绑定给指令的对象
    let width = "",
      height = "";
    function isReize() {
      const style = document.defaultView!.getComputedStyle(el);
      if (width !== style.width || height !== style.height) {
        binding.value(); // 关键
      }
      width = style.width;
      height = style.height;
    }
    // el.__vueSetInterval__ = setInterval(isReize, 300);
    el.__vueSetInterval__ = setInterval(isReize);
  },
  unmounted(el: any) {
    clearInterval(el.__vueSetInterval__);
  },
};
</script>

<style lang="scss" scoped></style>
