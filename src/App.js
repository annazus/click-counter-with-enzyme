import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div data-test="component-app">
        <p data-test="component-app-display">Counter = {this.state.count}</p>
        <button
          data-test="component-app-button"
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default App;
