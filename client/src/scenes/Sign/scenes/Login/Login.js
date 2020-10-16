import React, { Component } from 'react';
import './Login.css';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: ''
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.username)
      return this.setState({ error : 'Missing username.' });
    if (!this.state.password)
      return this.setState({ error: 'Missing password.' });
    return this.setState({ error: '' });
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    return (
      <div className = "Login">
        <form onSubmit = {this.handleSubmit}>
          <label>Username</label>
          <input type     = "text"
                 value    = {this.state.username}
                 onChange = {this.handleUsernameChange} />

          <label>Password</label>
          <input type     = "password"
                 value    = {this.state.password}
                 onChange = {this.handlePasswordChange} />

          <input type     = "submit" />
        </form>
      </div>
    )
  }
}

export default Login;
