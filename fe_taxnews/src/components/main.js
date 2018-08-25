import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import MasterPageRoute from "./masterPageRoute";
import DetailRoutePage from "./detailPageRoute";

//Navigation of all the Menu

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route path="/top-stories" component={MasterPageRoute} key="1" />  
        <Route path="/income-tax" component={MasterPageRoute} key="2" />
        <Route exact path="/" component={Home} />
      </Switch>
    );
  }
}

export default Main;
