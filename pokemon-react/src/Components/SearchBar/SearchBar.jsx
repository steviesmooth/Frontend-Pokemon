import "./SearchBar.css";

const SearchBar = ({ search, onChange }) => {
  return (
    <div className="searchBar">
      <input
        className="searchBar__input"
        placeholder="Search Pokemon"
        onChange={onChange}
        value={search}
        minLength={"1"}
        maxLength={"10"}
      />
    </div>
  );
};

export default SearchBar;
