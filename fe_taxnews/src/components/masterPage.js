"use strict";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { URL } from "../networkUtility";

//Navigation of all the Menu
//var URL = "";
class MasterPage extends Component {
  constructor(props) {
    super(props);
    this.url = this.props.location.pathname;
    this.state = {
      masterListData: []
    };
    this.categoryId = "";
    this.loadMoreArticle = this.loadMoreArticle.bind(this);
  }

  loadMoreArticle(e) {
    let articleCount = this.state.masterListData.length;
    let lastArticleDate = this.state.masterListData[articleCount - 1]
      .articleDate;
    let formattedDate = String(lastArticleDate).replace("T", " ");
    this.getNextArticleList(formattedDate);
  }

  componentDidMount() {
    // fetch the data as per the URL
    // mean while will mock the json
    window.scrollTo(0, 0);
    switch (this.url) {
      case "/top-stories":
        this.categoryId = 1;
        this.getArticleList(1);
        break;
      case "/income-tax":
        this.categoryId = 2;
        this.getArticleList(2);
        break;
    }
  }

  render() {
    return (
      <div className="col-md-9 total-news">
        <div className="content">
          <div className="grids">
            {this.state.masterListData.map(function(data) {
              return (
                <div className="grid box">
                  <div className="grid-header">
                    <Link className="gotosingle" to={this.url + "/" + data._id}>
                      {data.title}
                    </Link>
                    <ul>
                      <li>
                        <span>
                          posted by {data.author.name.first}{" "}
                          {data.author.name.last}
                        </span>
                        <span>
                          {" "}
                          on{" "}
                          {new Intl.DateTimeFormat("en-GB", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit"
                          }).format(new Date(data.articleDate))}
                        </span>
                      </li>
                      {/* <li>
                        <a href="#">5000 views</a>
                      </li> */}
                    </ul>
                  </div>
                  <div className="grid-img-content">
                    <a href="#">
                      <img src="images/news-placeholder.png" className="blog" />
                    </a>
                    <p>{data.subTitle}</p>
                    <div className="clearfix" />
                  </div>
                  <div className="comments">
                    <div>
                      <a className="readmore" href="#">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              );
            }, this)}
          </div>
          <div className="text-center">
            <span className="loadmore" onClick={this.loadMoreArticle}>
              LODE MORE ARTICLE
            </span>
          </div>
        </div>
      </div>
    );
  }

  getArticleList(_index) {
    axios
      .get(URL + `${_index}`)
      .then(result => {
        this.setState({
          masterListData: result.data.articles
        });
      })
      .catch(error => console.log(error));
  }

  getNextArticleList(lastArticleDate) {
    axios
      .get(URL + `next/${this.categoryId}/${lastArticleDate}`)
      .then(result => {
        if (result.data.articles.length > 0) {
          // console.log(result.data.articles);
          // this.state.masterListData.push(...result.data.articles);
          // console.log(this.state.masterListData);
          this.setState({
            masterListData: [
              ...this.state.masterListData,
              ...result.data.articles
            ]
          });
        }
      })
      .catch(error => console.log(error));
  }
}

export default MasterPage;
