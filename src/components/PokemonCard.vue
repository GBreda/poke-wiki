<template>
  <div class="card pokemon-card" @click="detailPokemon">
    <div v-if="isLoading" class="loader">
      <div class="loader__image skeleton"></div>
      <div class="loader__name skeleton"></div>
      <div class="loader__code skeleton"></div>
    </div>
    <div v-else>
      <img width="96" height="96" :src="image" :alt="altImage" />
      <p class="pokemon-card__name">{{ formattedName }}</p>
      <p class="pokemon-card__code">Cód: {{ id }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import router from "@/router/index";
import useCapitalize from "@/composables/useCapitalize";

const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});

const id = computed(() => props.pokemon.url.match(/\/([^/]+)\/?$/)[1]);

const image = computed(
  () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id.value}.png`
);

const altImage = computed(() => `${props.pokemon.name} front default sprite`);

const formattedName = useCapitalize(props.pokemon.name);

const detailPokemon = () => {
  router.push({ path: `/detail/${id.value}` });
};
</script>

<style lang="scss" scoped>
.pokemon-card {
  display: flex;
  flex-direction: column;

  text-align: center;

  cursor: pointer;

  &:hover {
    border: 1px solid;
  }

  &__name {
    font-size: 14px;
    font-weight: 700;
    margin-top: 10px;
  }

  &__code {
    font-weight: 700;
    font-size: 10px;
    margin-top: 10px;
  }
}
.loader {
  &__image {
    width: 96px;
    height: 96px;
    border-radius: 50%;
  }

  &__name {
    margin: 10px auto 0;
    width: 80px;
    height: 14px;
  }

  &__code {
    margin: 10px auto 0;
    width: 40px;
    height: 14px;
  }
}
</style>
