<template>
  <div class="header">
    <div class="header_left">
      <div class="header_left_box">
        <SvgIcon name="hua" style="width: 25px; height: 25px" />
        <div class="header_left_box_title">AkiSeele的模板测试系统</div>
      </div>

      <n-avatar
        round
        size="medium"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
    </div>
  </div>
</template>

<script lang="ts">
import SvgIcon from "@/components/SvgIcon.vue";
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
