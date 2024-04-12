import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ search, onChange }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img className="header__logo-img" src="../pokemon.svg" alt="logo" />
        </Link>
      </div>
      <SearchBar onChange={onChange} search={search} />
    </header>
  );
};

export default Header;
