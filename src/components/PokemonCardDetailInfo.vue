<template>
  <div class="card card-info">
    <h2 class="card-info__title">Informações</h2>
    <p class="card-info__text"><span>Altura: </span>{{ pokemonHeight }}</p>
    <p class="card-info__text"><span>Peso: </span>{{ pokemonWeight }}</p>
    <hr class="divider card-info__divider" />
    <h2 class="card-info__title">Habilidades</h2>
    <div class="chips">
      <span
        class="chips__item"
        v-for="(item, index) in details.abilities"
        :key="index"
      >
        {{ item.ability.name }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  details: {
    type: Object,
    required: true,
  },
});

const pokemonHeight = computed(() => `${props.details.height / 10}m`);
const pokemonWeight = computed(() => `${props.details.weight / 10}kg`);
</script>

<style lang="scss">
.card-info {
  border: 1px solid $gray;
  box-shadow: 0px 2px 8px $gray;
  border-radius: 8px;
  padding: 20px;
  background-color: $white;
  margin-top: 25px;

  &__title {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  &__text {
    margin-bottom: 5px;

    & > span {
      font-weight: 600;
    }
  }

  &__divider {
    margin-top: 15px;
    margin-bottom: 15px;
  }
}
</style>
