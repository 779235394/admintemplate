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
        name: "Dashboard",
        component: (resolve) => require(["@/views/dashboard/index"], resolve),
      },
      {
        path: "table",
        name: "table",
        component: (resolve) => require(["@/views/table/table"], resolve),
      },
      {
        path: "systerm",
        name: "系统设置",
        component: (resolve) => require(["@/views/systerm/systerm"], resolve),
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
