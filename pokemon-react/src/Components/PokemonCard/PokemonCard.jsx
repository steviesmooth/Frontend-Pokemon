import getIdPokemon from "../../utils/api";
import caught from "../../images/3.png";
import "./PokemonCard.css";
import unCaught from "../../images/1.png";
import { useState, useEffect } from "react";

const PokemonCard = ({
  pokemon,
  onSelectCard,
  onCatchingPokemon,
  onReleasingPokemon,
}) => {
  const [isCaught, setIsCaught] = useState(false);

  useEffect(() => {
    window.sessionStorage.setItem("Caught_Pokemon", JSON.stringify(isCaught));
  }, [isCaught]);

  useEffect(() => {
    setIsCaught(JSON.parse(window.sessionStorage.getItem("Caught_Pokemon")));
  }, []);

  return (
    <li className="card" key={pokemon.id}>
      <div className="card__info">
        {!isCaught ? (
          <img
            onClick={() => {
              onCatchingPokemon(pokemon, isCaught, setIsCaught);
              setIsCaught(true);
            }}
            className="card__poke-ball"
            src={unCaught}
            alt="pokeball"
          />
        ) : (
          <img
            onClick={() => {
              onReleasingPokemon(pokemon, isCaught, setIsCaught);
              setIsCaught(false);
            }}
            className="card__poke-ball"
            src={caught}
            alt="pokeball"
          />
        )}
        <h4 className="card__name">{pokemon.name}</h4>
        <img
          onClick={() => onSelectCard(pokemon)}
          className="card__image"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getIdPokemon(
            pokemon
          )}.png`}
          alt="pokemon-pic"
        />
      </div>
    </li>
  );
};

export default PokemonCard;
