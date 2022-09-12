import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// hash模式：createWebHashHistory，history模式：createWebHistory
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/login/index.vue"),
  },
  {
    path: "/card",
    name: "card",
    component: () => import("../pages/card/index.vue"),
  },
  {
    path: "/card1",
    name: "card1",
    component: () => import("../pages/card1/index.vue"),
  },
  {
    path: "/detail",
    name: "detail",
    component: () => import("../pages/detail/index.vue"),
  },
  {
    path: "/detail1",
    name: "detail1",
    component: () => import("../pages/detail1/index.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../pages/home/index.vue"),
  },
  {
    path: "/personal",
    name: "personal",
    component: () => import("../pages/personal/index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
