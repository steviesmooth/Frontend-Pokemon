import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokemonCaught.css";

const PokemonCaught = ({
  caught,
  setCaught,
  onSelectCard,
  onCatchingPokemon,
  onReleasingPokemon,
}) => {
  return (
    <>
      <div className="pokemon">
        <div className="pokemon__header">
          <h2 className="pokemon__header-title">Your Pokemon:</h2>
        </div>
        <div className="pokemon__section">
          {" "}
          {caught.map((pokemon) => (
            <PokemonCard
              pokemon={pokemon}
              key={pokemon.name}
              onSelectCard={() => onSelectCard(pokemon)}
              onCatchingPokemon={onCatchingPokemon}
              onReleasingPokemon={onReleasingPokemon}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PokemonCaught;
