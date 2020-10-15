import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      fullname: '',
      phone: '',
      username: '',
      password: '',
      error: ''
    };

    this.handleFullnameChange = this.handleFullnameChange.bind(this);
    this.handlePhoneChange    = this.handlePhoneChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit         = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.fullname)
      return this.setState({ error : 'Missing fullname.' });
      if (!this.state.phone)
        return this.setState({ error : 'Missing phone number.' });
    if (!this.state.username)
      return this.setState({ error : 'Missing username.' });
    if (!this.state.password)
      return this.setState({ error: 'Missing password.' });
    return this.setState({ error: '' });
  }

  handleFullnameChange(event) {
    this.setState({
      fullname: event.target.value
    });
  }

  handlePhoneChange(event) {
    this.setState({
      phone: event.target.value
    });
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
      <div className = "Register">
        <form onSubmit = {this.handleSubmit}>
          <label>Fullname</label>
          <input type     = "text"
                 value    = {this.state.fullname}
                 onChange = {this.handleFullnameChange} />

          <label>Phone</label>
          <input type     = "text"
                 value    = {this.state.phone}
                 onChange = {this.handlePhoneChange} />

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

export default Register;
