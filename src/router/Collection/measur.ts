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
  redirect: "/measur/ermeas/ermeasListo",
  icon: renderIcon(Balloon),
  meta: {
    title: "测试页面",
  },
  children: [
    {
      path: "ermeas",
      name: "Ermeas",
      label: "测试页面列表",
      // component: () => import("@/views/measur/list.vue"),
      meta: {
        hide: true,
        title: "二级测试页面",
      },
      children: [
        {
          path: "ermeasListo",
          name: "ErmeasListo",
          label: "列表One",
          component: () => import("@/views/measur/ermeas/list.vue"),
          meta: {
            hide: true,
            title: "列表One",
          },
        },
        {
          path: "ermeasListt",
          name: "ErmeasListt",
          label: "列表Two",
          component: () => import("@/views/measur/ermeas/list.vue"),
          meta: {
            hide: true,
            title: "列表Two",
          },
        },
      ],
    },
    {
      path: "ormeas",
      name: "Ormeas",
      label: "一级测试列表",
      component: () => import("@/views/measur/ormeas.vue"),
      meta: {
        title: "一级测试列表",
      },
    },
    {
      path: "Info/:id/:detailId",
      name: "MeasurInfo",
      show: false,
      label: "测试页面详情",
      component: () => import("@/views/measur/ermeas/info.vue"),
      meta: {
        title: "测试页面详情",
      },
    },
    {
      path: "TS_note",
      name: "TSDemo",
      label: "ts练习",
      component: () => import("@/views/measur/TS_demo.vue"),
      meta: {
        title: "ts练习",
      },
    },
    {
      path: "ecList",
      name: "EcList",
      label: "Echarts组件测试",
      component: () => import("@/views/measur/ecList.vue"),
      meta: {
        title: "ts练习",
      },
    },
    
  ],
};

export default MeasurRouter;
