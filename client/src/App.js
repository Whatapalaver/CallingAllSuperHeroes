import React, { Component } from "react";
import "./App.css";
import Inset from "./components/Inset";
import Starwars from "./components/Starwars";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      greeting: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit = async e => {
    e.preventDefault();
    console.log("Submitted!");
    const response = await fetch(
      `http://localhost:4000/api/greeting?name=${encodeURIComponent(
        this.state.name
      )}`
    );
    const body = await response.json();
    this.setState({ greeting: body.greeting });
  };

  componentDidMount() {}

  callApi = async () => {};

  render() {
    return (
      <div className="wrapper">
        <div className="box a" />
        <div className="box b">
          <h1>Calling all SuperHeroes</h1>
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
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Enter your name: </label>
            <input
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
          <p>{this.state.greeting}</p>
        </div>
      </div>
    );
  }
}

export default App;
