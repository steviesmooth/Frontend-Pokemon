// Changing Card Color Based on type

export const backgrounds = {
  fire: "red",
  bug: "yellow",
  poison: "purple",
  grass: "green",
  water: "blue",
  electric: "yellow",
  psychic: "purple",
  ground: "brown",
  rock: "brown",
  ice: "cyan",
  dragon: "green",
  fairy: "pink",
  fighting: "gray",
  ghost: "black",
};
export const fontColors = {
  normal: "black",
  electric: "black",
  bug: "black",
  ice: "black",
  fairy: "black",
};
export const defaultFontColor = "white";
export const defaultBackground = "white";

// API

export const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};
