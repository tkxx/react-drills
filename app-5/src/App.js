import React, { Component } from "react";
import Image from "./Components/Image";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image
          url={
            "https://i.kinja-img.com/gawker-media/image/upload/s--J1L04N3a--/c_scale,f_auto,fl_progressive,q_80,w_800/x88bidyo4mmvo2ibifao.jpg"
          }
        />
      </div>
    );
  }
}

export default App;
