import ApiClient from "./ApiClientService";

const PokemonService = {
  fetchPokemons() {
    return ApiClient.get("/pokemon");
  },
  fetchPokemon(query) {
    console.log(query);
    return ApiClient.get(`/pokemon/${query}`);
  },
};
export default PokemonService;
