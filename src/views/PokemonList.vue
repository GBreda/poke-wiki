<template>
  <base-search-input class="search-input" :placeholder="placeholder" />
  <h1 class="title">Pokémons</h1>

  <div class="cards">
    <pokemon-card
      v-for="(data, index) in pokemonsData"
      :key="index"
      :pokemon="data"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import httpstatus from "http-status";
import PokemonService from "@/services/PokemonService";
import BaseSearchInput from "@/components/BaseSearchInput.vue";
import PokemonCard from "@/components/PokemonCard.vue";

const placeholder = ref("Pesquise por nome ou código");
const pokemonsData = ref([]);

const fetchPokemon = async () => {
  try {
    const { data, status } = await PokemonService.fetchPokemons();

    if (status === httpstatus.OK) {
      pokemonsData.value = data.results;
    }
  } catch (error) {
    console.log(error);
  }
};

fetchPokemon();
</script>

<style lang="scss" scoped>
.title {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 38px;
}

.search-input {
  margin-top: 20px;
  margin-bottom: 45px;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
