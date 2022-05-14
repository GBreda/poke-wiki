import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "pokemon-list",
      component: () => import("../views/PokemonList.vue"),
    },
  ],
});

export default router;
