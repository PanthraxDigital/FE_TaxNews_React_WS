"use strict";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { URL } from "../networkUtility";
import { getCategoryId } from "../commonUtility";

//Navigation of all the Menu
//var URL = "";
class MasterPage extends Component {
  constructor(props) {
    super(props);
    this.url = this.props.location.pathname;
    this.state = {
      masterListData: [],
      isLoading: true,
      errorMessage: ""
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
    this.categoryId = getCategoryId(this.url);
    this.getArticleList(this.categoryId);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="col-md-9 total-news">
          <div className="content">
            <div className="grids">
              <h3>Loading please wait...</h3>
            </div>
          </div>
        </div>
      );
    } else {
      if (this.state.masterListData.length > 0) {
        return (
          <div className="col-md-9 total-news">
            <div className="content">
              <div className="grids">
                {this.state.masterListData.map(function(data) {
                  return (
                    <div className="grid box">
                      <div className="grid-header">
                        <Link
                          className="gotosingle"
                          to={this.url + "/" + data._id}
                        >
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
                          <img
                            src="images/news-placeholder.png"
                            className="blog"
                          />
                        </a>
                        <p>{data.subTitle}</p>
                        <div className="clearfix" />
                      </div>
                      <div className="comments">
                        <div>
                          <Link
                            className="readmore"
                            to={this.url + "/" + data._id}
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }, this)}
              </div>
              <div className="text-center">
                <span className="loadmore" onClick={this.loadMoreArticle}>
                  LOAD MORE ARTICLE
                </span>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="col-md-9 total-news">
            <div className="content">
              <div className="grids">
                <h3>No article found. Please come later</h3>
              </div>
            </div>
          </div>
        );
      }
    }
  }

  // get the list of article on Master Page
  getArticleList(_index) {
    axios
      .get(URL + `${_index}`)
      .then(result => {
        console.log(result);
        this.setState({
          masterListData: result.data.articles,
          isLoading: false
        });
      })
      .catch(error => {
        alert(error.Message);
        this.setState({
          isLoading: false
        });
      });
  }

  // get the list of next article on load more
  getNextArticleList(lastArticleDate) {
    axios
      .get(URL + `next/${this.categoryId}/${lastArticleDate}`)
      .then(result => {
        if (result.data.articles.length > 0) {
          this.setState({
            masterListData: [
              ...this.state.masterListData,
              ...result.data.articles
            ],
            isLoading: false
          });
        } else {
          alert("No More Article Found");
        }
      })
      .catch(error => console.log(error));
  }
}

export default MasterPage;
