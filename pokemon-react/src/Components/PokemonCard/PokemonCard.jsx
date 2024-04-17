import getIdPokemon from "../../utils/api";
import caught from "../../images/3.png";
import "./PokemonCard.css";
import unCaught from "../../images/1.png";
import { useState } from "react";

const PokemonCard = ({
  pokemon,
  onSelectCard,
  onCaughtPokemon,
  onCatchingPokemon,
  onReleasingPokemon,
}) => {
  const [isCaught, setIsCaught] = useState(false);

  const handleCatch = () => {
    onCaughtPokemon(isCaught, setIsCaught, pokemon);
  };
  return (
    <li className="card" key={pokemon.id}>
      <div className="card__info">
        {!isCaught ? (
          <img
            onClick={() => {
              handleCatch();
              onCatchingPokemon(pokemon);
            }}
            className="card__poke-ball"
            src={unCaught}
            alt="pokeball"
          />
        ) : (
          <img
            onClick={() => {
              handleCatch();
              onReleasingPokemon(pokemon);
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
