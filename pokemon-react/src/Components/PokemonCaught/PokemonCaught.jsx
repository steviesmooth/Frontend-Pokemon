import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokemonCaught.css";

const PokemonCaught = ({ caught, setCaught }) => {
  return (
    <>
      <div className="pokemon">
        <div className="pokemon__header">
          <h2 className="pokemon__header-title">Your Pokemon</h2>
        </div>
        <div className="pokemon__section">
          {" "}
          {caught.map((pokemon) => (
            <PokemonCard pokemon={pokemon} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PokemonCaught;
