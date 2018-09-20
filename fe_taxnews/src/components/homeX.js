import React, { Component } from "react";
import Body from "./body";
//Navigation of all the Menu

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeData: this.props.homeDataResult
    };
  }
  render() {
    return <Body homeDataResult={this.state.homeData} />;
  }
}

export default Home;
