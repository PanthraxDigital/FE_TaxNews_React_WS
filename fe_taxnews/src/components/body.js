import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { URL, HOME } from "../networkUtility";

class body extends Component {
  constructor(props) {
    super(props);
    this.tickerNewsList = [];
    this.state = {
      homeData: [],
      fromDeskData: [],
      tickerData: [],
      isLoading: true
    };
  }

  componentDidMount() {
    console.log("comp mounted body.js ");
    let homeArticlesCount = this.props.homeDataResult.length;
    for (let index = 0; index < homeArticlesCount; index++) {
      const articleItem = this.props.homeDataResult[index];

      for (let _index = 0; _index < articleItem.length; _index++) {
        const innerItem = articleItem[_index];
        this.tickerNewsList.push(innerItem.title);
      }
    }

    this.setState({
      fromDeskData: this.props.homeDataResult.splice(0, 1),
      homeData: this.props.homeDataResult.slice(0, -1),
      isLoading: false,
      tickerData: this.tickerNewsList
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="col-md-9 total-news">
          <h3>Loading Please Wait...</h3>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div className="ticker-wrap container">
            <div className="ticker">
              {this.state.tickerData.map((data, index1) => (
                <div className="ticker__item" key={index1}>
                  {data}
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-9 total-news">
            <div className="live-market">
              <h3>
                <span>From</span> The Desk
              </h3>
              <div className="bull">
                <Link to="#">
                  <img src={require("../images/change.jpg")} alt="" />
                </Link>
              </div>

              {this.state.fromDeskData[0].map((dataVal, _index) => {
                return (
                  <div className="bull-text" key={_index}>
                    <ul>
                      <li style={{ listStyle: "none" }}>
                        <Link to={`/from-desk/${dataVal._id}`}>
                          {dataVal.title}
                        </Link>
                      </li>
                    </ul>
                  </div>
                );
              }, this)}
              <div className="clearfix" />
            </div>
            <div className="posts">
              <div className="left-posts">
                <div className="Articles">
                  {this.state.homeData.map(function(data, index) {
                    let index2 = index + 1;
                    return (
                      <div key={index}>
                        <div className="main-title-head">
                          <h3>{getArticleTitle(index + 1)}</h3>
                          <Link to={`${getArticleURL(index + 1)}`}>More +</Link>
                          <div className="clearfix" />
                        </div>
                        <div>
                          {data.map(function(dataResult, index_) {
                            return (
                              <div className="world-news-grid" key={index_}>
                                <img src={dataResult.image} />
                                <Link
                                  style={{ color: "black" }}
                                  to={`${getArticleURL(index + 1)}/${
                                    dataResult._id
                                  }`}
                                >
                                  {dataResult.title}
                                </Link>
                                <p>{String(dataResult.subTitle)}</p>
                                <Link
                                  to={`${getArticleURL(index + 1)}/${
                                    dataResult._id
                                  }`}
                                >
                                  Read More
                                </Link>
                              </div>
                            );
                          })}
                          <div className="clearfix" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="right-posts" style={{ display: "none" }}>
                <div className="editorial">
                  <h3>Advertisment</h3>
                </div>
                <div className="editor">
                  <img src="https://via.placeholder.com/230x130" />
                </div>
                <br />
                <div className="editor">
                  <img src="https://via.placeholder.com/230x130" />
                </div>
                <br />
                <div className="editor">
                  <img src="https://via.placeholder.com/230x130" />
                </div>
                <br />
                <div className="editor">
                  <img src="https://via.placeholder.com/230x130" />
                </div>
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </React.Fragment>
      );
    }
  }

  componentWillUnmount() {
    this.setState({
      homeDataResult: []
    });
  }
}

// we are showing 3 headers
function getArticleTitle(_index) {
  switch (_index) {
    case 1:
      return "Top Stories";
    case 2:
      return "Income Tax";
    case 3:
      return "GST";
  }
}

// corresponding url of the 3 header article
function getArticleURL(_index) {
  switch (_index) {
    case 0:
      return "/from-desk";
    case 1:
      return "/top-stories";
    case 2:
      return "/income-tax";
    case 3:
      return "/gst";
  }
}

export default body;
