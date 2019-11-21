import "./styles.css";
import React, { Component } from 'react';
import api from "../../services/api";

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user : '',
      pass: ''
    };
  }
  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    api.post('/api/users/login', {
      user: this.state.user,
      pass: this.state.pass
    })
    .then(response => {
      if(response.status === 200) {
        this.props.history.push('/friends');
        console.log(response);
      }
      else {
        console.log(response.error);
      }     
      console.log(response.data);       
  })
  .catch(error => {
      console.log(error.message);
  });
  }

  render() {
    return (
      <div className="form">
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>
        <input
          type="text"
          name="user"
          placeholder="Usuário"
          value={this.state.user}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="password"
          name="pass"
          placeholder="Senha"
          value={this.state.pass}
          onChange={this.handleInputChange}
          required
        />
       <input type="submit" value="ENTRAR"/>
      </form>
      </div>
    );
  }
}