import { useEffect, useState } from "react";
import CardList from "./components/card-list/Card-list.component";
import SearchBox from "./components/card-list/search-box/Search-box.component";

import React from "react";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const handleSearch = (e) => {
    setSearchField(e.target.value);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((res) => setMonsters(res));
  }, []);

  const filteredMonsters = () => {
    return monsters.filter((item) => {
      return searchField.toLowerCase() === ""
        ? item
        : item.name.toLowerCase().includes(searchField.toLowerCase());
    });
  };

  return (
    <div className="min-h-screen flex justify-center flex-col items-center">
      <h1 className="text-[#0ccac4] text-7xl font-bold my-16 uppercase title">
        monsters rolodex
      </h1>
      <SearchBox onSearchChange={handleSearch} placeholder="Search monsters" />
      <CardList monsters={filteredMonsters()} />
    </div>
  );
};

export default App;
