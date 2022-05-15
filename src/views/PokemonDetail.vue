<template>
  <pokemon-card-detail :details="pokemonData" />
  <pokemon-card-detail-info :details="pokemonData"></pokemon-card-detail-info>
  <div class="back-button">
    <router-link to="/">Voltar</router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";
import httpstatus from "http-status";
import PokemonService from "@/services/PokemonService";
import PokemonCardDetail from "../components/PokemonCardDetail.vue";
import PokemonCardDetailInfo from "../components/PokemonCardDetailInfo.vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const pokemonData = ref({});

const fetchPokemon = async () => {
  try {
    const { data, status } = await PokemonService.fetchPokemon(props.id);

    if (status === httpstatus.OK) {
      pokemonData.value = data;
    }
  } catch (error) {
    console.log(error);
  }
};

fetchPokemon();
</script>

<style lang="scss">
.back-button {
  display: flex;
  justify-content: center;
  margin-top: 48px;
}
</style>
