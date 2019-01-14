import React, { Component } from "react";
import "./App.css";
import Inset from "./components/Inset";
import Starwars from "./components/Starwars";

class App extends Component {
  state = {};

  componentDidMount() {}

  callApi = async () => {};

  render() {
    return (
      <div className="wrapper">
        <div className="box a" />
        <div className="box b">
          <h1>Calling all superheroes </h1>
          <Starwars />
        </div>
        <div className="box c" />
        <div className="box ca" />
        <div className="box d" />
        <div className="box e" />
        <div className="box f" />
        <div className="box g" />
        <div className="box h" />
        <div className="box i" />
        <div className="box inset">
          <Inset />
        </div>
      </div>
    );
  }
}

export default App;
