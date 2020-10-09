import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Layout from "@/layout";

const routes = [
  {
    path: "/login",
    component: (resolve) => require(["@/views/login/index"], resolve),
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: (resolve) => require(["@/views/dashboard/index"], resolve),
        meta: { title: "首页" },
      },
      {
        path: "table",
        name: "table",
        component: (resolve) => require(["@/views/table/table"], resolve),
        meta: { title: "表格" },
      },
      {
        path: "systerm",
        name: "systerm",
        component: (resolve) => require(["@/views/systerm/systerm"], resolve),
        meta: { title: "系统设置" },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
