import "./PokemonCaughtModal.css";

const PokemonCaughtModal = ({ isOpen, selectedPokemon, name }) => {
  return (
    <div
      className={
        isOpen
          ? `modal modal__type_${name}`
          : `modal modal_closed modal__type_${name}`
      }
    >
      <div className="pokemon-caught-modal">
        <div className="pokemon-caught-modal__container">
          <p className="pokemon-caught-modal__title">You have now caught </p>
          <h4 className="pokemon-caught-modal__name">
            {selectedPokemon.name}!
          </h4>

          <img
            className="pokemon-caught-modal__img"
            src={selectedPokemon.img}
            alt={selectedPokemon.name}
          />
        </div>
      </div>
    </div>
  );
};
export default PokemonCaughtModal;
