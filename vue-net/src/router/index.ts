import HomeView from "@/views/HomeView.vue";
import WidgetsView from "@/views/WidgetsView.vue";
import { markRaw, reactive, watch } from "vue";
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

export const routes = reactive<RouteRecordRaw[]>([
  {
    path: "/",
    name: "home",
    component: markRaw(HomeView),
  },
  {
    path: "/widgets",
    name: "widgets",
    component: markRaw(WidgetsView),
  },
]);

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

watch(routes, () => {
  router.getRoutes().forEach((r) => router.hasRoute(r.path) && router.removeRoute(r.path));
  routes.forEach((r) => router.addRoute(r));
});

export default router;
