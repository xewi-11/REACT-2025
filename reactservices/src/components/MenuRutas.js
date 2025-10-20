import React, { Component } from "react";

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/tabla/21">tabla multiplicar 21</a>
          </li>
          <li>
            <a href="/collatz/14">Collatzr 14</a>
          </li>
          <li>
            <a href="/collatz/8">Collatzr 8</a>
          </li>
        </ul>
      </div>
    );
  }
}
