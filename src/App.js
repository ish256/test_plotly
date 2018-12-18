import React, { Component } from "react";
import Plot from "react-plotly.js";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: "2",
      value2: "5",
      value3: "3",

      data: [{ type: "bar", x: [1, 2, 3], y: [2, 5, 3] }]
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });

    if (name === "value1") {
      this.setState({
        data: [
          {
            type: "bar",
            x: [1, 2, 3],
            y: [value, this.state.value2, this.state.value3]
          }
        ]
      });
    } else if (name === "value2") {
      this.setState({
        data: [
          {
            type: "bar",
            x: [1, 2, 3],
            y: [this.state.value1, value, this.state.value3]
          }
        ]
      });
    } else {
      this.setState({
        data: [
          {
            type: "bar",
            x: [1, 2, 3],
            y: [this.state.value1, this.state.value2, value]
          }
        ]
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="range"
            name="value1"
            min="0"
            max="10"
            value={this.state.value1}
            onChange={this.handleChange}
            step="1"
          />
          <label for="volume">Value 1 = {this.state.value1}</label>
        </div>

        <div>
          <input
            type="range"
            name="value2"
            min="0"
            max="10"
            value={this.state.value2}
            onChange={this.handleChange}
            step="1"
          />
          <label for="volume">Value 2 = {this.state.value2}</label>
        </div>

        <div>
          <input
            type="range"
            name="value3"
            min="0"
            max="10"
            value={this.state.value3}
            onChange={this.handleChange}
            step="1"
          />
          <label for="volume">Value 3 = {this.state.value3}</label>
        </div>

        <div>
          <Plot
            data={this.state.data}
            layout={{ width: 620, height: 440, title: "A Fancy Plot" }}
          />
        </div>
      </div>
    );
  }
}

export default App;
