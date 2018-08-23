import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import TopStories from "./topStories";
import Master from "./master";

//Navigation of all the Menu

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/top-stories" component={Master} />
        <Route path="/income-tax" component={Master} />
      </Switch>
    );
  }
}

export default Main;
