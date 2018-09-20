import React, { Component } from "react";
import "./App.css";
import Header from "./components/headerComp/header";
import Main from "./components/main";
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
      //fromDeskResult: [],
      //tickerDataResult: [],
      isLoading: false,
      homeDataResult: []
      //sideBarResult: {}
    };
  }
  componentDidMount() {
    axios
      .get(URL + HOME)
      .then(result => {
        this.setState({
          homeDataResult: result.data.homeArticles,
          sideBarResult: result.data.homeArticles.pop(),
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
            <Main homeDataResult={this.state.homeDataResult} />
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
