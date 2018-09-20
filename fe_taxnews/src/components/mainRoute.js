import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./homeX";
import Body from "./body";
import MasterPageRoute from "./masterPageRoute";

//Navigation of all the Menu

class MainRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeDataResult: this.props.homeDataResult,
      fromDeskResult: this.props.fromDeskResult
    };
  }

  render() {
    return (
      <Switch>
        <Route path="/from-desk" component={MasterPageRoute} key="0" />
        <Route path="/top-stories" component={MasterPageRoute} key="1" />
        <Route path="/income-tax" component={MasterPageRoute} key="2" />
        <Route path="/gst" component={MasterPageRoute} key="3" />
        <Route path="/vat-cst" component={MasterPageRoute} key="4" />
        <Route path="/excise" component={MasterPageRoute} key="5" />
        <Route path="/custom" component={MasterPageRoute} key="6" />
        <Route path="/nbfc-rbi" component={MasterPageRoute} key="7" />
        <Route path="/sebi" component={MasterPageRoute} key="8" />
        <Route path="/roc-company-law" component={MasterPageRoute} key="9" />
        <Route path="/jobs" component={MasterPageRoute} key="10" />
        <Route path="/finance-budget" component={MasterPageRoute} key="11" />
        <Route path="/others" component={MasterPageRoute} key="12" />

        <Route
          exact={true}
          path="/"
          render={() => (
            <Body
              homeDataResult={this.state.homeDataResult}
              fromDeskResult={this.state.fromDeskResult}
            />
          )}
        />
      </Switch>
    );
  }
}

export default MainRoute;