import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: (resolve) => require(['@/views/layout/index'], resolve)
    },
    {
        path: '/login',
        component: (resolve) => require(['@/views/login/index'], resolve)
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
