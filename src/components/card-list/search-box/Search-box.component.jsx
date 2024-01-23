const SearchBox = ({ placeholder, onSearchChange }) => (
  <input
    type="search"
    placeholder={placeholder}
    className="border-2 border-zinc-800 p-2"
    onChange={onSearchChange}
  />
);

export default SearchBox;
