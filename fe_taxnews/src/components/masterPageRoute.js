import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import MasterPage from "./masterPage";
import DetailPage from "./detailPage";
//Navigation of all the Menu

class MasterPageRoute extends Component {
  render() {
    return (
      <Switch>
        <Route path="/:category/:id" component={DetailPage}  key="1" />
        <Route exact path="/:category" component={MasterPage} key="2" />
      </Switch>
    );
  }
}

export default MasterPageRoute;
