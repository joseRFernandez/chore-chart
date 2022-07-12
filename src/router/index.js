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
    name: "profile-page",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/profile/TheProfilePage.vue"
      ),
  },
  {
    path: "/chores",
    name: "chore-page",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/chores/TheChorePage.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
