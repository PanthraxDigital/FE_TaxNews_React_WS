import React, { Component } from "react";
import Body from "../components/body";
//Navigation of all the Menu

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Body
        homeDataResult={this.props.homeDataResult}
      />
    );
  }
}

export default Home;
