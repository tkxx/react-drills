//NewTask should be responsible for adding a new task to a task array on the App component.

import React, { Component } from "react";

class NewTask extends Component {
  constructor() {
    super();

    this.state = {
      tasks: ""
    };

    this.handleUpdateList = this.handleUpdateList.bind(this);
  }

  updateTasks(value) {
    this.setState({ tasks: value });
  }

  handleUpdateList() {
    this.props.addNewTask(this.state.tasks);
    this.setState({ tasks: "" });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.tasks}
          onChange={e => this.updateTasks(e.target.value)}
        />
        <button onClick={this.handleUpdateList}>Add</button>
      </div>
    );
  }
}

export default NewTask;
