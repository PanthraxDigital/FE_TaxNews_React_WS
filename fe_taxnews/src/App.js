import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/headerComp/header";
import Main from "./components/main";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Contains the link of the menu */}
        <Header />
        {/* Contains the routing details */}
        <Main />
      </div>
    );
  }
}

export default App;
