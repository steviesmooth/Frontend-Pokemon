import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";
import headerImg from "../../images/pokemon.svg";
import pokeBall from "../../images/3.png";
import { Link } from "react-router-dom";

const Header = ({ search, onChange, userName }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img className="header__logo-img" src={headerImg} alt="logo" />
        </Link>
      </div>
      <Link to="/profile">
        <div className="header__user">
          <img src={pokeBall} className="header__user-img" alt="poke-ball" />
          <p className="header__user-name">
            {userName.toString() || "StevenNarak"}
          </p>
        </div>
      </Link>
      <SearchBar onChange={onChange} search={search} />
    </header>
  );
};

export default Header;
