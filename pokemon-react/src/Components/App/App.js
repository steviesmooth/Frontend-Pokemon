import "./App.css";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import { clickedPokemon, getPokemon } from "../../utils/api";
import Main from "../Main/Main";
// import Footer from "../Footer/Footer";
//import NotFound from "../NotFoundPage/ErrorPage";

import PokemonModal from "../PokemonModal/PokemonModal";
import PokemonCaughtModal from "../PokemonCaughtModal/PokemonCaughtModal";
import PokemonReleasedModal from "../PokemonReleasedModal/PokemonReleasedModal";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [activeModal, setActiveModal] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({
    name: pokemonName,
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
    id: "",
  });
  const [search, setSearch] = useState("");

  const release = activeModal === "release";
  const catching = activeModal === "catching";

  useEffect(() => {
    setIsLoading(true);
    getPokemon()
      .then((json) => {
        setPokemonList([...json["results"]]);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleSearch = (data) => {
    return data.filter((item) => item.name.includes(search));
  };

  const closeModal = () => {
    setActiveModal("");
  };

  const handleCatchingPokemon = (pokemon) => {
    const pokemonName = pokemon.name;
    setPokemonName(pokemonName);
    clickedPokemon(pokemonName).then((res) => {
      setPokemon({
        name: pokemonName,
        img: res.sprites.front_default,
        id: res.id,
      });
    });
    setActiveModal("catching");
  };

  const handleReleasingPokemon = (pokemon) => {
    const pokemonName = pokemon.name;
    setPokemonName(pokemonName);
    clickedPokemon(pokemonName).then((res) => {
      setPokemon({
        name: pokemonName,
        img: res.sprites.front_default,
        id: res.id,
      });
    });

    setActiveModal("release");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveModal("");
    }, 2000);
    return () => clearTimeout(timer);
  }, [catching, release]);

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
      setPokemon({
        name: pokemonName,
        img: res.sprites.front_default,
        hp: res.stats[0].base_stat,
        attack: res.stats[1].base_stat,
        defense: res.stats[2].base_stat,
        type: res.types[0].type.name,
        id: res.id,
      });
    });
    setActiveModal("pokedex");
  };

  return (
    <div className="App">
      <Header search={search} onChange={(e) => setSearch(e.target.value)} />
      <Main
        pokemonList={handleSearch(pokemonList)}
        onSelectCard={handleSelectedPokemon}
        isLoading={isLoading}
        onCatchingPokemon={handleCatchingPokemon}
        onReleasingPokemon={handleReleasingPokemon}
      />
      {/* <Footer
        onNext={() => {
          setOffset(offset + limit);
        }}
        onPrev={() => {
          setOffset(offset - limit);
        }}
      /> */}
      <PokemonModal
        selectedPokemon={pokemon}
        name={"pokedex"}
        isOpen={activeModal === "pokedex"}
      />
      <PokemonCaughtModal
        selectedPokemon={pokemon}
        name={"catching"}
        isOpen={activeModal === "catching"}
      />
      <PokemonReleasedModal
        selectedPokemon={pokemon}
        name={"release"}
        isOpen={activeModal === "release"}
      />
    </div>
  );
}

export default App;
