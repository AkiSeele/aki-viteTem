import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import layout from "../layout/layout.vue"
import { h, Component } from "vue";
import { NIcon } from "naive-ui";
import {
  BookOutline,
} from "@vicons/ionicons5";
import MeasurRouter from "./Collection/measur"
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
const routes = [
  {
    path: "/",
    name: "Index",
    label: "首页",
    show: false,
    meta: {
      title: "首页",
    },
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        label: "首页",
        component: layout,
        redirect: "/home/index",
        children: [
          {
            path: "index",
            name: "index",
            component: () => import("@/views/index.vue"),
          },
        ],
      },
      {
        path: "/404",
        label: "404",
        component: () => import("@/views/404.vue"),
        name: "404",
        meta: {
          title: "404",
        },
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    label: "登陆",
    show: false,
    meta: {
      title: "登录",
      // keepAlive: true,
      // requireAuth: false,
    },
    component: () => import("@/views/login/login.vue"),
  },

  // 页面管理路由
  MeasurRouter,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
