import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import Master from "./master";

//Navigation of all the Menu

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/top-stories" component={Master} key="1" />
        <Route path="/income-tax" component={Master} key="2" />
      </Switch>
    );
  }
}

export default Main;
