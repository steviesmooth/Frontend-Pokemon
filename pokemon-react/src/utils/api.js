const baseUrl = "http://pokeapi.co/api/v2/pokemon";

export const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const clickedPokemon = (pokemonName) => {
  return fetch(`${baseUrl}/${pokemonName}`).then(processServerResponse);
};

export default function getIdPokemon(pokemon) {
  return pokemon.url
    .replace("https://pokeapi.co/api/v2/pokemon/", "")
    .replace("/", "");
}

export const pageTurner = (offset, limit) => {
  return fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  ).then(processServerResponse);
};
