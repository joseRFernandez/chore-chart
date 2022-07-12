import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/home/HomePage.vue"),
  },
  {
    path: "/profile",
    name: "profilePage",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/profilePage/TheProfilePage.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
