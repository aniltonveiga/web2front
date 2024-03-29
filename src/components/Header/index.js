import React from "react";
import "./style.css";
import "../../services/api";
import api from "../../services/api";
import Search from "../../components/Search";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Chat"
    };
  }
  logout = () => {
    api.get("/api/users/logout");
  };
  render() {
    return (
      <header>
        <nav className="menu">
          <h1 className="logo">{this.state.title}</h1>
          {this.props.user == null ? (
            <ul>
              <li>
                <Link to="/">INÍCIO</Link>
              </li>
              <li>
                <Link to="/signup">CADASTRO</Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/friends">AMIGOS</Link>{" "}
              </li>
              <li>
                <Link to="/" onClick={this.logout}>
                  LOGOUT
                </Link>
              </li>
            </ul>
          )}
          <h1 className="logoTr">{this.state.title}</h1>
        </nav>
        {this.props.user != null && <Search history={this.props.history} />}
      </header>
      /* <div>
                <h1> Questões de {this.props.title}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="option" name="option" >Escolha uma alternativa</label> 
                <ul>
                    <li><input type="radio" id="option" /> {this.props.q1} op uma</li>
                </ul>
                    <button onClick="" >Confirmar</button>
                </form>
            </div> */
    );
  }
}
