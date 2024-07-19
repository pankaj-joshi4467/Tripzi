import React from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import {Component} from 'react';
import { Link } from "react-router-dom";


class Navbar extends Component  {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }
  render(){
    return (
        <div>
          <nav className="NavbarItems">
            <h1 className="navbar-logo">Tripzi</h1>
    
            <div className="menu-icons" onClick={this.handleClick}>
              <i
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div>
            <ul className={this.state.clicked? "nav-menu active":"nav-menu"}>
              {MenuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <Link className={item.cName} to={item.url}>
                      {" "}
                      <i className={item.icon}></i>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
              <button>Sign up</button>
            </ul>
          </nav>
        </div>
      );
 
}
};

export default Navbar;
