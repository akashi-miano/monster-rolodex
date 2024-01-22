import React, { Component } from "react";
import CardList from "./components/card-list/Card-list.component";
import SearchBox from "./components/card-list/search-box/Search-box.component";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  handleSearch = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((res) =>
        this.setState(() => {
          return { monsters: res };
        })
      );
  }
  render() {
    const { monsters, searchField } = this.state;
    const { handleSearch } = this;
    const filteredMonsters = monsters.filter((item) => {
      return searchField.toLocaleLowerCase() === ""
        ? item
        : item.name
            .toLocaleLowerCase()
            .includes(searchField.toLocaleLowerCase());
    });
    return (
      <div className="min-h-screen flex justify-center flex-col items-center">
        <h1 className="text-[#0ccac4] text-7xl font-bold my-16 uppercase title">
          monsters rolodex
        </h1>
        <SearchBox
          onSearchChange={handleSearch}
          placeholder="Search monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
