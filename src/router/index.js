import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "pokemon-list",
      component: () => import("@/views/PokemonList.vue"),
    },
    {
      path: "/detail/:id",
      props: true,
      name: "pokemon-detail",
      component: () => import("@/views/PokemonDetail.vue"),
    },
  ],
});

export default router;
