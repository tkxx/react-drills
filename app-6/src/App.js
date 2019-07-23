import React, { Component } from "react";
import Todo from "./Component/Todo";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      tasks: ""
    };

    this.updateList = this.updateList.bind(this);
  }

  updateTasks(value) {
    this.setState({ tasks: value });
  }

  updateList() {
    this.setState({
      list: [...this.state.list, this.state.tasks],
      tasks: ""
    });
  }

  render() {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />;
    });
    return (
      <div>
        <h1>My to-do list:</h1>
        <input
          value={this.state.tasks}
          onChange={e => this.updateTasks(e.target.value)}
        />
        <button onClick={this.updateList}>Add</button>
        {console.log(this.UpdateList)}
        {list}
      </div>
    );
  }
}

export default App;
