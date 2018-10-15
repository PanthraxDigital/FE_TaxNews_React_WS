import React, { Component } from "react";
import { Link } from "react-router-dom";

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
    this.setState({
      fromDeskData: this.props.fromDeskResult,
      homeData: this.props.homeDataResult,
      isLoading: false,
      tickerData: this.tickerNewsList
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="total-news">
          <h3>Loading Please Wait...</h3>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div className="total-news">
            <div className="live-market">
              <h3>
                <span>From</span> The Desk
              </h3>
              <div className="bull">
                <Link to="#">
                  <img
                    src={
                      this.state.fromDeskData[0].hasOwnProperty("uploadImage")
                        ? this.state.fromDeskData[0].uploadImage.url
                        : this.state.fromDeskData[0].imageLink != null
                          ? this.state.fromDeskData[0].imageLink
                          : ""
                    }
                    alt=""
                  />
                </Link>
              </div>

              {this.state.fromDeskData.map((dataVal, _index) => {
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
                                <img
                                  src={
                                    dataResult.hasOwnProperty("uploadImage")
                                      ? dataResult.uploadImage.url
                                      : dataResult.imageLink != null
                                        ? dataResult.imageLink
                                        : ""
                                  }
                                />
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
                          }, this)}
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

  // componentWillUnmount() {
  //   this.setState({
  //     homeDataResult: []
  //   });
  // }
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
