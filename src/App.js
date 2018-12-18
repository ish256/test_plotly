import React, { Component } from "react";
import Plot from "react-plotly.js";
import logo from "./logo.svg";
import "./App.css";

class Rangecomponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="range"
          id="cowbell"
          name="cowbell"
          min="0"
          max="100"
          value={this.state.value}
          onChange={this.handleChange}
          step="10"
        />
        <label for="volume">Volume = {this.state.value}</label>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Rangecomponent />
        <Rangecomponent />
        <Rangecomponent />
        <div>
          <Plot
            data={[
              {
                x: [1, 3, 3],
                y: [2, 6, 3],
                type: "scatter",
                mode: "lines+points",
                marker: { color: "red" }
              },
              { type: "bar", x: [1, 2, 3], y: [2, 5, 3] }
            ]}
            layout={{ width: 320, height: 240, title: "A Fancy Plot" }}
          />
        </div>
      </div>
    );
  }
}

export default App;
