import React, { Component } from "react";
import topStoriesData from "./masterArticleList.json";
import incomeTaxData from "./incomeTax.json";

//Navigation of all the Menu

class Master extends Component {
  constructor(props) {
    super(props);
    ///alert(this.props.location.pathname);
  }

  state = {
    masterListData: []
  };

  componentDidMount() {
    // fetch the data as per the URL
    // mean while will mock the json

    switch (this.props.location.pathname) {
      case "/top-stories":
        this.setState({
          masterListData: topStoriesData
        });

        break;
      case "/income-tax":
        this.setState({
          masterListData: incomeTaxData
        });
        break;
    }
  }

  render() {
    return (
      <div class="col-md-9 total-news">
        <h1>Welcome to Master</h1>
        <div class="posts">
          <ul>
            {this.state.masterListData.map(function(data) {
              return <li>{data.title}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Master;
