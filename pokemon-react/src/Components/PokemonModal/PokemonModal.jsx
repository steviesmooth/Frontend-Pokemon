import "./PokemonModal.css";

const PokemonModal = ({ isOpen, selectedPokemon, name }) => {
  const backgrounds = {
    fire: "red",
    bug: "yellow",
    poison: "purple",
    grass: "green",
    water: "blue",
  };
  const defaultBackground = "white";
  return (
    <div
      className={
        isOpen
          ? `modal modal__type_${name}`
          : `modal_closed modal__type_${name}`
      }
    >
      <div className="pokemon-modal__card">
        <div
          className="pokemon-modal__card_container"
          style={{
            background: backgrounds[selectedPokemon.type] || defaultBackground,
          }}
        >
          <h4 className="pokemon-modal__card-name">{selectedPokemon.name}</h4>
          <p className="pokemon-modal__card-hp">{selectedPokemon.hp}HP</p>
          <img
            className="pokemon-modal__card-img"
            src={selectedPokemon.img}
            alt={selectedPokemon.name}
          />
          <p className="pokemon-modal__card-type">
            Type:{selectedPokemon.type}
          </p>
        </div>
        <div
          className="pokemon-modal__card-stats"
          style={{
            background: backgrounds[selectedPokemon.type] || defaultBackground,
          }}
        >
          <p className="pokemon-modal__card-attack">
            Attack:{selectedPokemon.attack}
          </p>
          <p className="pokemon-modal__card-defense">
            Defense:{selectedPokemon.defense}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PokemonModal;
