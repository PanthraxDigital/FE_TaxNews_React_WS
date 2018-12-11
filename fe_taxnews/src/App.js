import React, { Component } from "react";
import "./App.css";
import Header from "./components/headerComp/header";
import MainRoute from "./components/mainRoute";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import axios from "axios";
import { URL, HOME } from "./networkUtility";
import NewsTicker from "./components/newsTicker";
import SubscriberPopup from "./components/subscriberPopup";
import { getCookie, checkCookie } from "./commonUtility";

class App extends Component {
  constructor(props) {
    super(props);
    this.tickerNewsList = [];
    this.state = {
      isLoading: false,
      homeDataResult: [],
      loadSubscriberPopup: false,
      searchValue: ""
    };
  }
  componentDidMount() {
    // Check the presence of Cookie, if cookie not found, show popup,

    if (checkCookie() != 1) {
      this.setState({
        loadSubscriberPopup: true
      });
    }
    axios
      .get(URL + HOME)
      .then(result => {
        this.setState({
          homeDataResult: result.data.homeArticles,
          sideBarResult: result.data.homeArticles.pop(),
          fromDeskResult: result.data.homeArticles.shift(),
          isLoading: true
        });
      }, this)
      .catch(error => console.log(error));
  }

  closeSubscriberPopup(e) {
    this.setState({
      loadSubscriberPopup: false
    });
  }

  searchCallBack(e) {
    console.log("App.js " + e);
    this.setState({
      searchValue: e,
      isLoading: true
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <React.Fragment>
          <div>
            {/* Contains the link of the menu */}
            <Header searchCallBack={this.searchCallBack.bind(this)} />
            {/* Contains the routing details */}
            <div className="main-content">
              <NewsTicker homeDataResult={this.state.homeDataResult} />
              <div className="col-md-9">
                <MainRoute
                  homeDataResult={this.state.homeDataResult}
                  fromDeskResult={this.state.fromDeskResult}
                  userSearchValue={this.state.searchValue}
                />
              </div>
              <Sidebar sideBarResult={this.state.sideBarResult} />
            </div>
            <div className="clearfix" />
            <Footer />  
          </div>
          {this.state.loadSubscriberPopup ? (
            <SubscriberPopup
              closeSubscriberPopup={this.closeSubscriberPopup.bind(this)}
            />
          ) : (
            ""
          )}
        </React.Fragment>
      );
    } else {
      return (
        <div className="total-news">
          <h4>Loading Please Wait...</h4>
        </div>
      );
    }
  }
}

export default App;
