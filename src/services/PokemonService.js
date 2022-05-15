import ApiClient from "./ApiClientService";

const PokemonService = {
  fetchPokemons(params) {
    return ApiClient.get("/pokemon", { params });
  },
  fetchPokemon(query) {
    return ApiClient.get(`/pokemon/${query}`);
  },
};
export default PokemonService;
