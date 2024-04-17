import PokemonCard from "../PokemonCard/PokemonCard";
import Preloader from "../Preloader/Preloader";
import "./Main.css";
const Main = ({
  pokemonList,
  onSelectCard,
  isLoading,
  onCaughtPokemon,
  onCatchingPokemon,
  onReleasingPokemon,
}) => {
  return (
    <>
      {!isLoading ? (
        <main className="main">
          <section className="main__section">
            <ul className="main__items">
              {pokemonList.map((pokemon) => {
                return (
                  <PokemonCard
                    key={pokemon.name}
                    pokemon={pokemon}
                    onSelectCard={onSelectCard}
                    onCaughtPokemon={onCaughtPokemon}
                    onCatchingPokemon={onCatchingPokemon}
                    onReleasingPokemon={onReleasingPokemon}
                  />
                );
              })}
            </ul>
          </section>
        </main>
      ) : (
        <Preloader />
      )}
    </>
  );
};
export default Main;
