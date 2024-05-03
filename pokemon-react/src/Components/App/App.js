import "./App.css";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { clickedPokemon, getPokemon } from "../../utils/api";
import Main from "../Main/Main";

import Footer from "../Footer/Footer";
import PokemonModal from "../PokemonModal/PokemonModal";
import PokemonCaughtModal from "../PokemonCaughtModal/PokemonCaughtModal";
import PokemonReleasedModal from "../PokemonReleasedModal/PokemonReleasedModal";
import Profile from "../Profile/Profile";
import NotFound from "../NotFoundPage/ErrorPage";
import EditUserModal from "../EditUserModal/EditUserModal";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [caught, setCaught] = useState([]);
  const [userName, setUserName] = useState("");
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

  // Localstorage for catching for css purpose on profile page

  useEffect(() => {
    const pokemonData = JSON.parse(
      localStorage.getItem("Catching_Poke") || "[]"
    );
    setCaught(pokemonData);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("Catching_Poke", JSON.stringify(caught));
  }, [caught]);

  // Getting Pokemon

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

  // Closing Popups

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveModal("");
    }, 1500);
    return () => clearTimeout(timer);
  }, [catching, release]);

  // Handlers

  const handleUserUpdate = (userName) => {
    setActiveModal("update");
    setUserName(userName);
  };
  const handleSearch = (data) => {
    return data.filter((item) => item.name.includes(search));
  };

  const handleCatchingPokemon = (pokemon) => {
    const pokemonName = pokemon.name;
    setPokemonName(pokemonName);
    clickedPokemon(pokemonName)
      .then((res) => {
        setPokemon({
          name: pokemonName,
          img: res.sprites.front_default,
          id: res.id,
        });
        setCaught([...caught, pokemon]);
        setActiveModal("catching");
      })
      .catch((err) => console.error(err));
  };

  const handleReleasingPokemon = (pokemon) => {
    const pokemonName = pokemon.name;
    setPokemonName(pokemonName);
    clickedPokemon(pokemonName)
      .then((res) => {
        setPokemon({
          name: pokemonName,
          img: res.sprites.front_default,
          id: res.id,
        });
        setCaught([...[], pokemon]);
        setActiveModal("release");
      })
      .catch((err) => console.error(err));
  };

  const handleSelectedPokemon = (data) => {
    const pokemonName = data.name;
    setPokemonName(pokemonName);
    clickedPokemon(pokemonName)
      .then((res) => {
        setPokemon({
          name: pokemonName,
          img: res.sprites.front_default,
          hp: res.stats[0].base_stat,
          attack: res.stats[1].base_stat,
          defense: res.stats[2].base_stat,
          type: res.types[0].type.name,
          id: res.id,
        });
        setActiveModal("pokedex");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <Header
        search={search}
        userName={userName}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Main
              pokemonList={handleSearch(pokemonList)}
              onSelectCard={handleSelectedPokemon}
              isLoading={isLoading}
              caught={caught}
              setCaught={setCaught}
              onCatchingPokemon={handleCatchingPokemon}
              onReleasingPokemon={handleReleasingPokemon}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              caught={caught}
              setCaught={setCaught}
              onEditModal={handleUserUpdate}
              userName={userName}
              onCatchingPokemon={handleCatchingPokemon}
              onReleasingPokemon={handleReleasingPokemon}
              onSelectCard={handleSelectedPokemon}
            />
          }
        />

        <Route path={"*"} element={<NotFound />} />
      </Routes>
      <Footer />
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
      <EditUserModal
        name={"update"}
        isOpen={activeModal === "update"}
        handleUserUpdate={handleUserUpdate}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;
