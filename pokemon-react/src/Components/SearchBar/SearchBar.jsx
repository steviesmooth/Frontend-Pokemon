import "./SearchBar.css";

const SearchBar = ({ search, onChange }) => {
  return (
    <div className="searchBar">
      <input
        className="searchBar__input"
        placeholder="Search Pokemon on page"
        onChange={onChange}
        value={search}
      />
    </div>
  );
};

export default SearchBar;
