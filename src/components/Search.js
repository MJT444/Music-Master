import React, { Component } from "react";

class Search extends Component {
  state = { artistQuery: "" };
  UpadteArtistQuery = (event) => {
    this.setState({ artistQuery: event.target.value });
  };

  handleKeyDown = (event) => {
    console.log("keyevent", event);
    if (event.key === "Enter") {
      this.searchArtist();
    }
  };

  searchArtist = () => {
    this.props.searchArtist(this.state.artistQuery);
  };

  render() {
    return (
      <div>
        <input
          onChange={this.UpadteArtistQuery}
          onKeyDown={this.handleKeyDown}
          placeholder="Search for an Artist"
        />
        <button onClick={this.searchArtist}>Search</button>
      </div>
    );
  }
}

export default Search;
