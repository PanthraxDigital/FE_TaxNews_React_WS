import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import MasterPage from "./masterPage";
import DetailPage from "./detailPage";
//Navigation of all the Menu

class MasterPageRoute extends Component {
  constructor(props){
    super(props);
   
  }
  render() {
    return (
      <Switch>
        <Route exact path="/:category" component={MasterPage} key="1" />
        <Route
          exact
          path="/search?searchText"
          userSearchValue={this.props.userSearchValue}
          component={MasterPage}
          key="2"
        />
        <Route path="/:category/:articleId" component={DetailPage} key="3" />
      </Switch>
    );
  }
}

export default MasterPageRoute;
