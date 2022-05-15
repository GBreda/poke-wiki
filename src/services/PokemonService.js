import ApiClient from "./ApiClientService";

const PokemonService = {
  fetchPokemons() {
    return ApiClient.get("/pokemon");
  },
  fetchPokemon(id) {
    return ApiClient.get(`/pokemon/${id}`);
  },
};
export default PokemonService;
