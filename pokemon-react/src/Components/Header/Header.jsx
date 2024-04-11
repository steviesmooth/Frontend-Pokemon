import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ isLoggedIn, onLoginModal, onRegisterModal }) => {
  const [search, setSearch] = useState("");

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img className="header__logo-img" src="../pokemon.svg" alt="logo" />
        </Link>
      </div>
      <div className="header__search-container">
        <input
          className="header__search-bar"
          placeholder="Search Pokemon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </header>
  );
};

export default Header;
