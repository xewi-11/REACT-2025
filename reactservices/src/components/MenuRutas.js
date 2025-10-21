import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/tabla/21">tabla multiplicar 21</NavLink>
          </li>
          <li>
            <NavLink to="/tabla/5">tabla multiplicar 5</NavLink>
          </li>
          <li>
            <NavLink to="collatz/14">Collatzr 14</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
