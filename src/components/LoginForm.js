import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      password: '',
      submitted: false
    };
  }

  handleUserName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // THIS IS WAY COOLER BUT FAILS TEST SPEC:
    this.displayMessage(event)
  }

  displayMessage = (event) => {
    this.setState({
      submitted: true
    }, () => {
      this.refs.testUsername.value = '';
      this.refs.testPassword.value = '';
      setTimeout(() => {
        this.setState({
          submitted: false
        })
      }, 1500)
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.submitted && <div style={{color: 'green'}}>
          Form Submitted
        </div>}
        {!this.state.submitted && <div style={{color: 'black'}}>
          Click 'Log In' to Submit
        </div>}
        {<p></p>}
        <div>
          <label>
            Username
            <input id="test-username" ref="testUsername" type="text" onChange={this.handleUserName} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" ref="testPassword" type="password" onChange={this.handlePassword} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
