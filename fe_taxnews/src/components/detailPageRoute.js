import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import DetailPage from "./detailPage";
import MasterPage from "./masterPageRoute";

class DetailPageRoute extends Component {

  render() {
    return (
      <Switch>
        <Route path="/:category/:id" component={DetailPage} />
        <Route path="/:category" component={MasterPage} />
      </Switch>
    );
  }
  
}

export default DetailPageRoute;



