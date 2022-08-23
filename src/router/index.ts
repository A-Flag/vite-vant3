import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// hash模式：createWebHashHistory，history模式：createWebHistory
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/pages/login/index.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/pages/home/index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
