import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor(props) {
    super(props);
    console.log("App Constructer created");
  }

  componentDidMount() {
    //Ajax call
    console.log("App- Mounted");
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value++;
    // console.log(this.state.counters[index]);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((a) => {
      a.value = 0;
      return a;
    });
    this.setState({ counters });
  };

  handleDelete = (course) => {
    let counters = this.state.counters.filter((m) => m.id !== course.id);
    this.setState({ counters });
  };

  render() {
    console.log("App-Rendered");

    return (
      <React.Fragment>
        <NavBar counters={this.state.counters} />
        <main className="container">
          <Counters
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
