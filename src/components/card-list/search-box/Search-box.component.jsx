import React, { Component } from "react";

export class SearchBox extends Component {
  render() {
    return (
      <input
        type="search"
        placeholder={this.props.placeholder}
        className="border-2 border-zinc-800 p-2"
        onChange={this.props.onSearchChange}
      />
    );
  }
}

export default SearchBox;
