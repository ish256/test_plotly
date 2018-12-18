import React, { Component } from "react";
import Plot from "react-plotly.js";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "5",
      data: [{ type: "bar", x: [1, 2, 3], y: [2, 5, 3] }]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.setState({
      data: [{ type: "bar", x: [1, 2, 3], y: [2, 5, event.target.value] }]
    });
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="range"
            id="cowbell"
            name="cowbell"
            min="0"
            max="10"
            value={this.state.value}
            onChange={this.handleChange}
            step="1"
          />
          <label for="volume">Volume = {this.state.value}</label>
        </div>

        <div>
          <Plot
            data={this.state.data}
            layout={{ width: 320, height: 240, title: "A Fancy Plot" }}
          />
        </div>
      </div>
    );
  }
}

export default App;
