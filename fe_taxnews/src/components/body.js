import React, { Component } from "react";
// import homeStories from "./homeArticleList.json";
import axios from "axios";
import { URL, HOME } from "../networkUtility";

class body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeDataResult: []
    };
  }

  componentDidMount() {

    axios
      .get(URL + HOME)
      .then(result => {
        this.setState({
          homeDataResult: result.data.homeArticles
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="col-md-9 total-news">
        <div className="live-market">
          <h3>
            <span>From</span> The Desk
          </h3>
          <div class="bull">
            <a href="#">
              <img src="images/business.jpg" alt="" />
            </a>
          </div>
          <div class="bull-text">
            <a class="bull1" href="singlepage.html">
              Bulls return after eight days; Sensex up 517 points
            </a>
            <p>Bharti, HDFC, ONGC, ITC and CIL emerge as top gainers</p>
            <ul>
              <li>
                <a href="singlepage.html">
                  Grandkids sue Vijaypat Singhania over inheritance
                </a>
              </li>
              <li>
                <a href="singlepage.html">
                  RBI relaxes norms for NPA provisioning
                </a>
              </li>
              <li>
                <a href="singlepage.html">
                  We expect RBI to cut rates by another 75 bps: UBS executive
                  director
                </a>
              </li>
            </ul>
          </div>
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
                      <a href="#">More +</a>
                      <div className="clearfix" />
                    </div>
                    <div>
                      {data.map(function(dataResult) {
                        return (
                          <div className="world-news-grid">
                            <img src="images/news-placeholder.png" />
                            <a href="#" className="title">
                              {dataResult.title}
                            </a>
                            <p>{String(dataResult.subTitle)}</p>
                            <a href="#">Read More</a>
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

  componentWillUnmount(){
    this.setState({
      homeDataResult : []
    })
  }
}

function getArticleTitle(_index) {
  console.log(_index);
  switch (_index) {
    case 0:
      return "Top Stories";
    case 1:
      return "Income Tax";
    case 2:
      return "GST";
  }
}

export default body;
