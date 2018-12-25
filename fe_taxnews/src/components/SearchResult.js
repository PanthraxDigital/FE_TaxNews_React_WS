import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { URL_SEARCH } from "../networkUtility";
import * as Utility from "../commonUtility";

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResultValue: []
    };
  }

  componentWillMount() {
    this.searchUserResult();
  }


  render() {
    if (this.state.searchResultValue.length > 0) {
      return (
        <div className="total-news">
          <div className="content">
            <div className="grids">
              {this.state.searchResultValue.map(function(data, index1) {
                return (
                  <div className="grid box" key={index1}>
                    <div
                      className="grid-header"
                      style={{ textAlign: "justify" }}
                    >
                      <Link
                        className="gotosingle"
                        to={
                          Utility.mapObjectIdWithMenuProd(
                            data.categories[0]._id
                          ) +
                          "/" +
                          data._id
                        }
                      >
                        {data.title}
                      </Link>
                      <ul>
                        <li>
                          <span>
                            posted by{" "}
                            {data.author != null
                              ? data.author.name.first +
                                " " +
                                data.author.name.last
                              : "TaxKnowledge Team"}
                          </span>
                          <span>
                            {" "}
                            on {Utility.DateFormat(data.articleDate)}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="grid-img-content">
                      <a href="#" style={{ display: "none" }}>
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
                        <Link
                          className="readmore"
                          to={
                            Utility.mapObjectIdWithMenuProd(
                              data.categories[0]._id
                            ) +
                            "/" +
                            data._id
                          }
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }, this)}
            </div>
            <div className="text-center" style={{ display: "none" }}>
              <span className="loadmore" onClick={this.loadMoreArticle}>
                LOAD MORE ARTICLE
              </span>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ margin: "20px 0" }}>
          <h3>Result not found. Try again or try different words.</h3>
        </div>
      );
    }
  }

  searchUserResult() {
    this.searchValue = window.location.search.split("=")[1];
    axios
      .get(`${URL_SEARCH}${this.searchValue}`)
      .then(_result => {
        this.setState({
          searchResultValue: _result.data.searchResult
        });
      })
      .catch(error => {
        console.log("error " + error);
      });
  }
}

export default SearchResult;
