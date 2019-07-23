import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleUsername(value) {
    this.setState({ username: value });
  }

  handlePassword(value) {
    this.setState({ password: value });
  }

  handleLogin(value) {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
  }

  render() {
    return (
      <div>
        <input onChange={e => this.handleUsername(e.target.value)} />
        <input onChange={e => this.handlePassword(e.target.value)} />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default Login;
