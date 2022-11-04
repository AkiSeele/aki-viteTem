<template>
  <!-- <div class="warp"> -->
    <n-data-table :columns="columns" :data="data" />
  <!-- </div> -->
</template>

<script lang="ts" setup>

type Song = {
  no: number
  title: string
  length: string
}

const createColumns = () => {
  return [
    {
      title: 'No',
      key: 'no'
    },
    {
      title: 'Title',
      key: 'title'
    },
    {
      title: 'Length',
      key: 'length'
    },
    {
      title: 'Action',
      key: 'actions'
    }
  ]
}

const columns = createColumns()

const data: Song[] = [
  { no: 3, title: 'Wonderwall', length: '4:18' },
  { no: 4, title: "Don't Look Back in Anger", length: '4:48' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' }
]

</script>