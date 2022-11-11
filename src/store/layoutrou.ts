import { defineStore } from "pinia";

export const uselayoutRouStore = defineStore("layoutRou", {
  // 开启数据持久化
  persist: true,

  state: (): StateTs => {
    return {
      // 导航面包数组
      routerList: [
        {
          label: "首页",
          name: "Home",
          path: "/",
        },
      ],
      // 当前路由对象
      routerData: {},
      // 菜单值，默认主页（根据路由名来）
      routerMenu: "Home",
      // 导航面包样式控制
      routerActive: 0,
    };
  },
  actions: {
    upRouterMenu(data: any) {
      this.routerMenu = data;
    },
    upRouterData(data: any) {
      this.routerData = data;
    },
    upRouterActive(data: number) {
      this.routerActive = data;
    },
  },
});

interface StateTs {
  routerList: any[];
  routerData: any;
  routerMenu: String;
  routerActive: number;
}
