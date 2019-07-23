import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchFilter: "",
      dogNames: ["Luna", "Spot", "Link", "Clifford", "Pikachu"]
    };
  }
  handleName(filter) {
    this.setState({ searchFilter: filter });
  }

  render() {
    let dogNamesFiltered = this.state.dogNames
      .filter((dogNames, index) => {
        return dogNames.includes(this.state.searchFilter);
      })
      .map((dogNames, index, array) => {
        return <h2 key={index}>{dogNames}</h2>;
      });
    return (
      <div className="App">
        <input onChange={e => this.handleName(e.target.value)} />
        {dogNamesFiltered}
      </div>
    );
  }
}

export default App;
