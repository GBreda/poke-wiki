<template>
  <div class="card" @click="detailPokemon">
    <img
      class="card__image"
      width="96"
      height="96"
      :src="image"
      :alt="altImage"
    />
    <p class="card__name">{{ formattedName }}</p>
    <p class="card__code">Cód: {{ id }}</p>
  </div>
</template>

<script setup>
import { computed, toRefs } from "vue";

const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
});

const { name, url } = toRefs(props.pokemon);

const id = computed(() => url.value.match(/\/([^/]+)\/?$/)[1]);

const image = computed(
  () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id.value}.png`
);

const altImage = computed(() => `${props.pokemon.name} front default sprite`);

const formattedName = computed(
  () => `${name.value.charAt(0).toUpperCase()}${name.value.slice(1)}`
);

const detailPokemon = () => {
  console.log(id.value);
};
</script>

<style lang="scss">
.card {
  border: 1px solid $gray;
  box-shadow: 0px 2px 8px $gray;
  border-radius: 8px;
  padding: 20px;
  background-color: $white;
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
