import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import MasterPageRoute from "./masterPageRoute";

//Navigation of all the Menu

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route path="/from-desk" component={MasterPageRoute} key="0" />
        <Route path="/top-stories" component={MasterPageRoute} key="1" />
        <Route path="/income-tax" component={MasterPageRoute} key="2" />
        <Route exact path="/" component={Home} />
      </Switch>
    );
  }
}

export default Main;
