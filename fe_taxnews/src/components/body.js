import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { URL, HOME } from "../networkUtility";

class body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromDesk: [],
      homeDataResult: [],
      isLoading: true
    };
  }

  componentDidMount() {
    axios
      .get(URL + HOME)
      .then(result => {
        this.setState({
          fromDesk: result.data.homeArticles.splice(0, 1),
          homeDataResult: result.data.homeArticles,
          isLoading: false
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <h1>Loading Please Wait...</h1>
        </div>
      );
    } else {
      return (
        <div className="col-md-9 total-news">
          <div className="live-market">
            <h3>
              <span>From</span> The Desk
            </h3>
            <div class="bull">
              <Link to="#">
                <img src="images/news-placeholder.png" alt="" />
              </Link>
            </div>

            {this.state.fromDesk[0].map((dataVal, _index) => {
              return (
                <div class="bull-text">
                  <ul>
                    <li style={{ listStyle: "none" }}>
                      <Link to={`from-desk/${dataVal._id}`} key={_index}>
                        {dataVal.title}
                      </Link>
                    </li>
                  </ul>
                </div>
              );
            }, this)}
            <div class="clearfix" />
          </div>
          <div className="posts">
            <div className="left-posts">
              <div className="Articles">
                {this.state.homeDataResult.map(function(data, index) {
                  return (
                    <div>
                      <div className="main-title-head">
                        <h3>{getArticleTitle(index)}</h3>
                        <Link to={getArticleURL(index)}>More +</Link>
                        <div className="clearfix" />
                      </div>
                      <div>
                        {data.map(function(dataResult) {
                          return (
                            <div className="world-news-grid">
                              <img src="images/news-placeholder.png" />
                              <Link
                                style={{ color: "black" }}
                                to={`${getArticleURL(index)}/${dataResult._id}`}
                              >
                                {dataResult.title}
                              </Link>
                              <p>{String(dataResult.subTitle)}</p>
                              <Link
                                to={`${getArticleURL(index)}/${dataResult._id}`}
                              >
                                Read More
                              </Link>
                            </div>
                          );
                        })}
                        <div class="clearfix" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="right-posts">
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
            <div class="clearfix" />
          </div>
        </div>
      );
    }
  }

  componentWillUnmount() {
    this.setState({
      homeDataResult: []
    });
  }
}

function getArticleTitle(_index) {
  switch (_index) {
    case 0:
      return "Top Stories";
    case 1:
      return "Income Tax";
    case 2:
      return "GST";
  }
}

function getArticleURL(_index) {
  switch (_index) {
    case 0:
      return "/top-stories";
    case 1:
      return "/income-tax";
    case 2:
      return "/gst";
  }
}

export default body;
