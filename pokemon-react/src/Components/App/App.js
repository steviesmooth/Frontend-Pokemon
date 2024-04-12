import "./App.css";
import Header from "../Header/Header";
import { Suspense, useEffect, useState } from "react";
import { pageTurner } from "../../utils/api";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(0);
  const limit = 20;

  const handleSearch = (data) => {
    return data.filter((item) => item.name.includes(search));
  };

  useEffect(() => {
    pageTurner(offset, limit).then((json) => {
      console.log(json);
      setPokemonList([...json["results"]]);
    });
  }, [offset]);

  return (
    <Suspense fallback={<Preloader />}>
      <div className="App">
        <Header search={search} onChange={(e) => setSearch(e.target.value)} />
        <Main pokemonList={handleSearch(pokemonList)} />
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
      </div>
    </Suspense>
  );
}

export default App;
