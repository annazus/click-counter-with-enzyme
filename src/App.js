import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, error: "" };
  }

  render() {
    return (
      <div data-test="component-app">
        <p data-test="component-app-display">Counter = {this.state.count}</p>
        <p data-test="component-app-display-error">{this.state.error}</p>

        <button
          data-test="component-app-button"
          onClick={() => {
            this.setState({ count: this.state.count + 1, error: "" });
          }}
        >
          +1
        </button>
        <button
          data-test="component-app-button-decrement"
          onClick={() => {
            this.setState({
              count: this.state.count ? this.state.count - 1 : 0,
              error: this.state.count ? "" : "Cannot decrement counter"
            });
          }}
        >
          -1
        </button>
      </div>
    );
  }
}

export default App;
