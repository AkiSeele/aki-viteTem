<template>
  <div class="hader" style="height: 40%;">
    <AkiEcharts :options="options" Uid="one">
      <template #content>
        <div class="title_echarts">
          <n-gradient-text
            gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
          >
            柱状图
          </n-gradient-text>
        </div>
        <div class="body_nei">
          <div id="one"></div>
        </div>
      </template>
    </AkiEcharts>
    <AkiEcharts :options="optionsTwo" Uid="two">
      <template #content>
        <div class="title_echarts">
          饼图
        </div>
        <div class="body_nei">
          <div id="two"></div>
        </div>
      </template>
    </AkiEcharts>
  </div>
  <div style="margin-top: 20px;height: 55%;">
    <AkiEcharts :options="optionsTwo" Uid="tre">
      <template #content>
        <div class="title_echarts">
          饼图
        </div>
        <div class="body_nei">
          <div id="tre"></div>
        </div>
      </template>
    </AkiEcharts>
  </div>
</template>

<script setup lang="ts">
import AkiEcharts from "@/components/AkiEcharts.vue";

const options = ref({
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line",
    },
  ],
});
const optionsTwo = ref({
  title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'horizontal',
    x: "center",
    y: "bottom",
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
});
const VFocus = {
  mounted:(el: any) => {
    el.focus()
  }
}
</script>

<style lang="scss" scoped>
.hader {
  display: flex;
  justify-content: space-between;
}
.hader > div {
  width: 49%;
}

.title_echarts {
  height: 10%;
}
.body_nei {
  height: 90%;
}
.body_nei > div {
  height: 100%;
}
</style>
