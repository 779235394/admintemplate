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
    // component: (resolve) => require(["@/views/layout/index"], resolve),
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index"),
        // meta: { title: "Dashboard", icon: "dashboard" },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
