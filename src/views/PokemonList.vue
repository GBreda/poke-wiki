<template>
  <base-search-input
    class="search-input"
    :placeholder="placeholder"
    @updateSearchInput="search"
  />
  <p v-if="isPokemonListEmpty" class="error-message">
    Nenhum pokemon encontrado!
  </p>

  <h1 class="title">Pokémons</h1>

  <div class="cards" ref="scrollDiv" @wheel="fetchMorePokemons">
    <pokemon-card
      v-for="(data, index) in pokemonsData"
      :key="index"
      :pokemon="data"
      :is-loading="isLoading"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import httpstatus from "http-status";
import router from "@/router/index";
import PokemonService from "@/services/PokemonService";
import BaseSearchInput from "@/components/BaseSearchInput.vue";
import PokemonCard from "@/components/PokemonCard.vue";

const placeholder = ref("Pesquise por nome ou código");
const pokemonsData = ref([]);
const isPokemonListEmpty = ref(false);
const isLoading = ref(false);
const LIMIT_INCREMENT = 24;
const limit = ref(24);
const scrollDiv = ref();

const fetchPokemons = async () => {
  isLoading.value = true;
  try {
    const { data, status } = await PokemonService.fetchPokemons({
      limit: limit.value,
    });

    if (status === httpstatus.OK) {
      pokemonsData.value = data.results;
    }
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};

fetchPokemons();

const fetchPokemon = async (query) => {
  try {
    const { data, status } = await PokemonService.fetchPokemon(query);

    if (status === httpstatus.OK && data.id) {
      router.push({ path: `/detail/${data.id}` });
    }
  } catch ({ response }) {
    if (response.status === httpstatus.NOT_FOUND) {
      isPokemonListEmpty.value = true;
    }
  }
};

const search = (value) => {
  if (!value) {
    isPokemonListEmpty.value = false;
  }
  fetchPokemon(value);
};

let processingMouseWheel = false;

const isPageBottom = (event) => {
  if (event.deltaY <= 0) {
    return false;
  }
  const pageBottom =
    scrollDiv.value.scrollHeight - scrollDiv.value.clientHeight;

  return pageBottom === scrollDiv.value.scrollTop;
};

const fetchMorePokemons = async (event) => {
  if (processingMouseWheel) return;

  processingMouseWheel = true;

  if (isPageBottom(event)) {
    await fetchPokemons({ limit: (limit.value += LIMIT_INCREMENT) });
  }
  processingMouseWheel = false;
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 38px;
  margin-top: 45px;
}

.search-input {
  margin-top: 20px;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  height: 700px;
  overflow: auto;
}

.error-message {
  text-align: center;
  margin-top: 5px;
  color: $red;
  font-weight: 700;
}
</style>
