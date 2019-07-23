import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      foods: ["bagel ", "pizza ", "ramen ", "dimsum "]
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.foods}</h2>
      </div>
    );
  }
}

export default App;
