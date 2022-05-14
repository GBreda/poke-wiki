import ApiClient from "./ApiClientService";

const PokemonService = {
  fetchPokemons() {
    return ApiClient.get(`/pokemon`);
  },
};
export default PokemonService;
