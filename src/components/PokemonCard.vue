<template>
  <div class="card pokemon-card" @click="detailPokemon">
    <img width="96" height="96" :src="image" :alt="altImage" />
    <p class="pokemon-card__name">{{ formattedName }}</p>
    <p class="pokemon-card__code">Cód: {{ id }}</p>
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
  align-items: center;

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
</style>
