"use strict";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { URL } from "../networkUtility";
import AdSense from "react-adsense";
import { DateFormat, getCategoryId, getCategory } from "../commonUtility";
import index from "react-adsense";

//Navigation of all the Menu
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
        <div className="total-news">
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
          <div className="total-news">
            <div className="content">
              <div className="grids">
                {this.state.masterListData.map(function(data, index1) {
                  if (index1 % 5 == 0) {
                    return (
                      <React.Fragment>
                        <AdSense.Google
                          client="ca-pub-4652165289391769"
                          slot="4114300139"
                          //layout="in-article"
                          style={{
                            width : "250px"
                          }}
                          // format="fluid"
                          // responsive="true"
                          key={index1}
                        />
                        <br />
                        {displayArticleHtml(this.url, data, index1)}
                      </React.Fragment>
                    );
                  }
                  return displayArticleHtml(this.url, data, index1);
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
        console.log("master list " + JSON.stringify(result));
        this.setState({
          masterListData: result.data.articles,
          isLoading: false
        });
      })
      .catch(error => {
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

function displayArticleHtml(URL, data, index1) {
  return (
    <div className="grid box" key={index1}>
      <div className="grid-header" style={{ textAlign: "justify" }}>
        <Link className="gotosingle" to={URL + "/" + data._id}>
          {data.title}
        </Link>
        <ul>
          <li>
            <span>
              posted by{" "}
              {data.author != null
                ? data.author.name.first + " " + data.author.name.last
                : "TaxKnowledge Team"}
            </span>
            <span> on {DateFormat(data.articleDate)}</span>
          </li>
        </ul>
      </div>
      <div className="grid-img-content">
        <a href="#">
          <img
            src={
              data.uploadImage != null
                ? data.uploadImage.url
                : data.imageLink != null
                ? data.imageLink
                : ""
            }
            className="blog"
          />
        </a>
        <p>{data.subTitle}</p>
        <div className="clearfix" />
      </div>
      <div className="comments">
        <div>
          <Link className="readmore" to={URL + "/" + data._id}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
export default MasterPage;
