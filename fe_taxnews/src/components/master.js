import React, { Component } from "react";
import { browserHistory } from "react-router";

//Navigation of all the Menu

class Master extends Component {
  constructor(props) {
    super(props);
    alert(this.props.location.pathname);
    
  }
  state = {
    urlParam: null
  };

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <h1>Welcome to Master</h1>
      </div>
    );
  }
}

export default Master;
