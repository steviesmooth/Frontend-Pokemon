import "./App.css";
import Header from "../Header/Header";
import { Suspense, useEffect, useState } from "react";
import { clickedPokemon, pageTurner } from "../../utils/api";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import PokemonModal from "../PokemonModal/PokemonModal";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({
    name: pokemonName,
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(0);
  const limit = 20;

  const handleSearch = (data) => {
    return data.filter((item) => item.name.includes(search));
  };

  const closeModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    function handleOverlay(evt) {
      if (
        evt.target.classList.contains("modal") ||
        evt.target.classList.contains("pokedex")
      ) {
        closeModal();
      }
    }
    document.addEventListener("click", handleOverlay);
    return () => document.removeEventListener("click", handleOverlay);
  }, []);

  const handleSelectedPokemon = (data) => {
    const pokemonName = data.name;
    setPokemonName(pokemonName);
    clickedPokemon(pokemonName).then((res) => {
      console.log(res);
      setPokemon({
        name: pokemonName,
        img: res.sprites.front_default,
        hp: res.stats[0].base_stat,
        attack: res.stats[1].base_stat,
        defense: res.stats[2].base_stat,
        type: res.types[0].type.name,
      });
    });
    setActiveModal("pokedex");
  };

  useEffect(() => {
    pageTurner(offset, limit).then((json) => {
      setPokemonList([...json["results"]]);
    });
  }, [offset]);

  return (
    <Suspense fallback={<Preloader />}>
      <div className="App">
        <Header search={search} onChange={(e) => setSearch(e.target.value)} />
        <Main
          pokemonList={handleSearch(pokemonList)}
          onSelectCard={handleSelectedPokemon}
        />
        <Footer
          onNext={() => {
            setPokemonList([]);
            setOffset(offset + limit);
          }}
          onPrev={() => {
            setPokemonList([]);
            setOffset(offset - limit);
          }}
        />
        <PokemonModal
          selectedPokemon={pokemon}
          name={"pokedex"}
          isOpen={activeModal === "pokedex"}
        />
      </div>
    </Suspense>
  );
}

export default App;
