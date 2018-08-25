import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import MasterPage from "./masterPage";
import DetailPage from "./detailPage";
//Navigation of all the Menu

class MasterPageRoute extends Component {
  render() {
    return (
      <Switch>
        <Route path="/top-stories/:id" component={DetailPage}  />
        <Route exact path="/top-stories" component={MasterPage} />
      </Switch>
    );
  }
}

export default MasterPageRoute;
