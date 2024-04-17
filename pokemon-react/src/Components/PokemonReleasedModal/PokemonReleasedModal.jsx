import "./PokemonReleasedModal.css";

const PokemonReleasedModal = ({ isOpen, selectedPokemon, name }) => {
  return (
    <div
      className={
        isOpen
          ? `modal modal__type_${name}`
          : `modal_closed modal__type_${name}`
      }
    >
      <div className="pokemon-modal__card">
        <div className="pokemon-modal__card_container">
          <p className="pokemon-caught__title">You have released </p>
          <h4 className="pokemon-modal__card-name">{selectedPokemon.name}!</h4>

          <img
            className="pokemon-modal__card-img"
            src={selectedPokemon.img}
            alt={selectedPokemon.name}
          />
        </div>
      </div>
    </div>
  );
};
export default PokemonReleasedModal;
