<template>
  <n-data-table :columns="columns" :data="data" :pagination="pagination" />
</template>

<script lang="ts" setup>
type Song = {
  no: number;
  title: string;
  length: string;
};

const createColumns = () => {
  return [
    {
      title: "No",
      key: "no",
    },
    {
      title: "Title",
      key: "title",
    },
    {
      title: "Length",
      key: "length",
    },
    {
      title: "Action",
      key: "actions",
    },
  ];
};

const pagination = reactive({
  page: 1, //默认在第几页
  pageSize: 10, //每页条数
  showSizePicker: true,
  pageSizes: [3, 5, 7, 10], //可切换的 每页条数
  onChange: (page: number) => {
    pagination.page = page;
  },
  onUpdatePageSize: (pageSize: number) => {
    pagination.pageSize = pageSize;
    pagination.page = 1;
  },
});

const columns = createColumns();

const data: Song[] = [
  { no: 3, title: "Wonderwall", length: "4:18" },
  { no: 4, title: "Don't Look Back in Anger", length: "4:48" },
  { no: 12, title: "zzz", length: "7:27" },
  { no: 3, title: "ddd", length: "4:18" },
  { no: 4, title: "sssr", length: "4:48" },
  { no: 12, title: "ggg Sdfg d fgva", length: "7:27" },
  { no: 3, title: "ffffg", length: "4:18" },
  { no: 4, title: "Dodfg dfghhsdfg dfg  Anger", length: "4:48" },
  { no: 12, title: "Chamsdf ernova", length: "7:27" },
  { no: 3, title: "cccv", length: "4:18" },
  { no: 4, title: "Donsdsadck in Anger", length: "4:48" },
  { no: 12, title: "Chdgpernova", length: "7:27" },
  { no: 3, title: "Wonderwall", length: "4:18" },
  { no: 4, title: "Don'tsdfg sdf k in Anger", length: "4:48" },
  { no: 12, title: "Champzxc pernova", length: "7:27" },
  { no: 3, title: "Wonderwall", length: "4:18" },
  { no: 4, title: "Don't sad  in Anger", length: "4:48" },
  { no: 12, title: "Champasd rnova", length: "7:27" },
];
</script>
