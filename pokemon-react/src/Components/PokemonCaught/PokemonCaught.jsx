import "./PokemonCaught.css";

const PokemonCaught = ({ caught, setCaught }) => {
  return (
    <>
      {caught.results?.map((pokemon) => (
        <div className="pokemon">
          <div className="pokemon__header">
            <h2 className="pokemon__header-title">Your Pokemon</h2>
          </div>
          <ul className="pokemon__section">
            <h3 className="pokemon__name">{pokemon.name}</h3>
          </ul>
        </div>
      ))}
    </>
  );
};

export default PokemonCaught;
