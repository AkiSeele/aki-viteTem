<template>
  <div class="warpS">
    <div class="warpS_header" style="height: 20%">
    </div>
    <div class="warpS_center" style="height: 40%"></div>
    <div class="warpS_footer" style="height: 40%"></div>
  </div>
</template>

<script lang="ts">

</script>

<style lang="scss" scoped>
.n-card {
  width: 100%;
  height: 100%;
}

.warpS {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &_header {
    margin-top: 0 !important;
  }

  &_footer {
    margin-bottom: 0 !important;
  }

  &_header,
  &_center,
  &_footer {
    margin: 5px 0;
    box-sizing: border-box;
    width: 100%;
    background: #fff;
  }
}
</style>
