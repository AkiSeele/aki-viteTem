import layout from "@/layout/layout.vue";
import { h, Component } from "vue";
import { NIcon } from "naive-ui";
import {
  LogoElectron,
  BarcodeOutline,
  BriefcaseOutline,
} from "@vicons/ionicons5";

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}


const CaseManaRouter = {
  path: "/casemana",
  name: "CaseMana",
  label: "案件管理",
  component: layout,
  redirect: "/casemana",
  icon: renderIcon(BriefcaseOutline),
  meta: {
    title: "案件管理",
  },
  children: [
    {
      path: "report",
      name: "Report",
      label: "案件上报",
      component: () => import("@/views/casemana/report.vue"),
      meta: {
        hide: true,
        title: "案件上报",
      },
    },
    {
      path: "allcases",
      name: "Allcases",
      label: "全部案件列表",
      component: () => import("@/views/casemana/allcases/allcases.vue"),
      meta: {
        hide: true,
        title: "测试页面列表",
      },
    },
  ],
};

export default CaseManaRouter;