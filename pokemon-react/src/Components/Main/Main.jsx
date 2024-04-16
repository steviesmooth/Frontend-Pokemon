import PokemonCard from "../PokemonCard/PokemonCard";
import "./Main.css";
const Main = ({ pokemonList, onSelectCard }) => {
  return (
    <main className="main">
      <section className="main__section">
        <ul className="main__items">
          {pokemonList.map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon.name}
                pokemon={pokemon}
                onSelectCard={onSelectCard}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
};
export default Main;
