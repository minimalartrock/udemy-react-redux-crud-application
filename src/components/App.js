import React, { Component } from "react";

const App = () => (
  <div>
    <Counter />
  </div>
);

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(this.state);
    this.state = { count: 0 };
  }

  handlePlusButton = () => {
    console.log(this.state.count);
    this.setState({ count: this.state.count + 1 });
  };

  handleMinuxButton = () => {
    console.log(this.state.count);
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <React.Fragment>
        <div>counter: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinuxButton}>-1</button>
      </React.Fragment>
    );
  }
}

export default App;
