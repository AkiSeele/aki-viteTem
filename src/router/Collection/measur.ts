import layout from "@/layout/layout.vue";
import { h, Component } from "vue";
import { NIcon } from "naive-ui";
import { Balloon, ListOutline } from "@vicons/ionicons5";


function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const MeasurRouter = {
  path: "/measur",
  name: "Measur",
  label: "测试页面",
  component: layout,
  redirect: "/measur/List",
  icon: renderIcon(Balloon),
  meta: {
    title: "测试页面",
  },
  children: [
    {
      path: "List",
      name: "MeasurList",
      label: "测试页面列表",
      component: () => import("@/views/measur/list.vue"),
      icon: renderIcon(ListOutline),
      meta: {
        hide: true,
        title: "测试页面列表",
      },
    },
    {
      path: "Info/:id/:detailId",
      name: "MeasurInfo",
      show: false,
      label: "测试页面详情",
      component: () => import("@/views/measur/info.vue"),
      meta: {
        title: "测试页面详情",
      },
    },
  ],
};

export default MeasurRouter;