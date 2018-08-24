import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/headerComp/header";
import Main from "./components/main";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
          <div >
            {/* Contains the link of the menu */}
            <Header />
            {/* Contains the routing details */}
            <Main />
            <Sidebar />
            <Footer />
          </div>
      
    );
  }
}

export default App;
