import "./PokemonReleasedModal.css";

const PokemonReleasedModal = ({ isOpen, selectedPokemon, name }) => {
  return (
    <div
      className={
        isOpen
          ? `modal modal__type_${name}`
          : `modal modal_closed modal__type_${name}`
      }
    >
      <div className="pokemon-released-modal">
        <div className="pokemon-released-modal__container">
          <p className="pokemon-released-modal__title">You have released </p>
          <h4 className="pokemon-released-modal__name">
            {selectedPokemon.name}!
          </h4>

          <img
            className="pokemon-released-modal__img"
            src={selectedPokemon.img}
            alt={selectedPokemon.name}
          />
        </div>
      </div>
    </div>
  );
};
export default PokemonReleasedModal;
