import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NewTask from "./Components/NewTask";
import List from "./Components/List";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };

    this.addNewTask = this.addNewTask.bind(this);
  }

  addNewTask(tasks) {
    this.setState({ list: [...this.state.list, tasks] });
  }

  render() {
    return (
      <div>
        <h1>My to-do list</h1>
        <NewTask addNewTask={this.addNewTask} />
        <List tasks={this.state.list} />
      </div>
    );
  }
}

export default App;
