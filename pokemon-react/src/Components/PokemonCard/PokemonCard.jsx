import getIdPokemon from "../../utils/api";
import "./PokemonCard.css";

const PokemonCard = ({ pokemon, onSelectCard }) => {
  return (
    <li className="card" key={pokemon.id}>
      <div className="card__info">
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
