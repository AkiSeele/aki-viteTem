import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import layout from "../layout/layout.vue"

// 案件页面路由
import CaseManaRouter from "./CaseMana/casemana"
// 测试页面
import MeasurRouter from "./Collection/measur"

// 这里为了方便Naive的菜单渲染，就去掉了路由的类型校验RouteRecordRaw
const routes = [
  {
    path: "/",
    name: "Index",
    label: "首页",
    // show是隐藏菜单选项，因为这个隐藏是配合权限的，
    // 不过与这个隐藏全部子菜单右侧小三角还是会出现，所以就全部隐藏了。
    // 在菜单页面渲染路由时手动加了条首页菜单
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
    ],
  },
  {
    path: "/login",
    name: "Login",
    label: "登陆",
    show: false,
    meta: {
      title: "登录",
    },
    component: () => import("@/views/login/login.vue"),
  },
  {
    path: "/404",
    label: "404",
    show: false,
    component: () => import("@/views/404.vue"),
    name: "404",
    meta: {
      title: "404",
    },
  },

  // 将其他的页面路由各自的文件夹下面，方便管理

  // 案件页面路由
  CaseManaRouter,
  // 页面管理路由
  MeasurRouter,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
