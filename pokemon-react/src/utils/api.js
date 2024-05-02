import { baseUrl, processServerResponse } from "./constants";

export const clickedPokemon = (pokemonName) => {
  return fetch(`${baseUrl}/${pokemonName}`).then(processServerResponse);
};

export default function getIdPokemon(pokemon) {
  return pokemon.url
    .replace("https://pokeapi.co/api/v2/pokemon/", "")
    .replace("/", "");
}

export const getPokemon = () => {
  return fetch(`${baseUrl}?limit=151&offset=0`).then(processServerResponse);
};
