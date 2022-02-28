import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/quiz",
    name: "Main",
    component: () => import("../views/Main.vue"),
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: () => import("../components/pages/quiz/Quiz.vue"),
  },
  {
    path: "/offer",
    name: "Offer",
    component: () => import("../components/pages/offer/Offer.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
