import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import MasterPage from "./masterPage";
import DetailPage from "./detailPage";
//Navigation of all the Menu

class MasterPageRoute extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/:category" component={MasterPage} key="1" />
        <Route path="/:category/:articleId" component={DetailPage} key="2" />
      </Switch>
    );
  }
}

export default MasterPageRoute;
