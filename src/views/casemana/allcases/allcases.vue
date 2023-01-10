<template>
  <h1>全部案件列表</h1>
  <div>
    <vxe-table
      border
      show-overflow
      ref="xTable1"
      height="300"
      :row-config="{isHover: true}">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="content" title="Html" type="html" show-overflow></vxe-column>
      <vxe-column field="role" title="Role" show-overflow></vxe-column>
    </vxe-table>
  </div>
</template>

<script setup lang="ts">
import { VxeTableInstance } from "vxe-table";
import XEUtils from 'xe-utils'
const mockList1: any = []
for (let index = 0; index < 200; index++) {
  mockList1.push({
    name: 'Test' + index,
    role: 'Developer',
    sex: '男'
  })
}
const xTable1 = ref<VxeTableInstance>()
  onMounted(() => {
  nextTick(() => {
    const $table = xTable1.value
    if ($table) {
      $table.loadData(XEUtils.clone(mockList1, true))
    }
  })
})
</script>

