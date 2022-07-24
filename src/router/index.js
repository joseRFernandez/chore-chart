import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/home/HomePage.vue"),
  },
  {
    path: "/create-account",
    name: "create-account-page",
    component: () =>
      import(
        /* webpackChunkName: "create-account-page" */ "../views/auth/TheCreateAccountPage.vue"
      ),
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
  {
    // todo: set up a 404 page to catch all unmatched routes
    path: "/:catchAll(.*)*",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/home/HomePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
