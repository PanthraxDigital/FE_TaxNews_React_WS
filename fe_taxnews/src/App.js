import React, { Component } from "react";
import "./App.css";
import Header from "./components/headerComp/header";
import MainRoute from "./components/mainRoute";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import axios from "axios";
import { URL, HOME } from "./networkUtility";
import NewsTicker from "./components/newsTicker";

class App extends Component {
  constructor(props) {
    super(props);
    this.tickerNewsList = [];
    this.state = {
      isLoading: false,
      homeDataResult: []
    };
  }
  componentDidMount() {
    axios
      .get(URL + HOME)
      .then(result => {
        //console.log("result " + JSON.stringify(result));
        this.setState({
          homeDataResult: result.data.homeArticles,
          sideBarResult: result.data.homeArticles.pop(),
          fromDeskResult: result.data.homeArticles.shift(),
          isLoading: true
        });
      }, this)
      .catch(error => console.log(error));
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          {/* Contains the link of the menu */}
          <Header />

          {/* Contains the routing details */}
          <div className="main-content">
            <NewsTicker homeDataResult={this.state.homeDataResult} />
            <MainRoute
              homeDataResult={this.state.homeDataResult}
              fromDeskResult={this.state.fromDeskResult}
            />
            <Sidebar sideBarResult={this.state.sideBarResult} />
          </div>
          <div className="clearfix" />
          <Footer />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default App;
