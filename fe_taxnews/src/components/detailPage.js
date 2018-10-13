import React, { Component } from "react";
import axios from "axios";
import { URL } from "../networkUtility";
import { DateFormat, getCategoryId, getCategory } from "../commonUtility";
import { Link } from "react-router-dom";
import Comment from "./comment";

class DetailPage extends Component {
  constructor(props) {
    super(props);
    let pathname = String(this.props.location.pathname);

    this.categoryId = pathname.substring(
      pathname.indexOf("/"),
      pathname.lastIndexOf("/")
    );
    this.articleId = pathname.substring(
      pathname.lastIndexOf("/") + 1,
      pathname.length
    );
    this.dataURL = `${URL}${getCategoryId(this.categoryId)}/${this.articleId}`;
    this.state = {
      isLoading: true,
      detailArticle: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.match.params.articleId !== this.props.match.params.articleId
    ) {
      this.dataURL = `${URL}${getCategoryId(this.categoryId)}/${
        nextProps.match.params.articleId
      }`;
      this.fetchArticleDetail();
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.fetchArticleDetail();
  }

  render() {
    {
      if (this.state.isLoading) {
        return (
          <div className="col-md-9 total-news">
            <div className="content">
              <div className="grid-header">
                <h3>Loading Please Wait ...</h3>
              </div>
            </div>
          </div>
        );
      } else {
        if (this.state.detailArticle.length > 0) {
          return (
            <React.Fragment>
              <div className="col-md-9 total-news">
                <div className="content">
                  <div className="grid-header">
                    <a
                      className="gotosingle"
                      href="#"
                      style={{ textAlign: "justify" }}
                    >
                      {this.state.detailArticle[0].title}
                    </a>
                    <ul>
                      <li>
                        <span>
                          posted by{" "}
                          {this.state.detailArticle[0].author != null
                            ? this.state.detailArticle[0].author.name.first +
                              " " +
                              this.state.detailArticle[0].author.name.last
                            : "TaxKnowledge Team"}
                        </span>
                        <span>
                          {" "}
                          on{" "}
                          {DateFormat(this.state.detailArticle[0].articleDate)}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="mdFormat"
                    style={{ fontSize: "1.1em", paddingTop: "50px" }}
                    dangerouslySetInnerHTML={{
                      __html: this.state.detailArticle[0].description
                    }}
                  />
                  <br />
                </div>
                {this.state.detailArticle[0].hasOwnProperty(
                  "attachmentLink"
                ) ? (
                  <a
                    href={`${this.state.detailArticle[0].attachmentLink}`}
                    target="_blank"
                    type="button"
                    className="btn btn-danger"
                    style={{
                      backgroundColor: "#cf0000",
                      marginBottom: "20px",
                      borderRadius: 0,
                      marginTop: "30px",
                      color: "white"
                    }}
                  >
                    To read the full text click here +
                  </a>
                ) : (
                  ""
                )}

                {this.categoryId === "/from-desk" ? (
                  <div>
                    <Link to="/">BACK</Link>
                  </div>
                ) : (
                  <div>
                    <Link to={`${this.categoryId}`}>
                      READ MORE{" "}
                      {this.categoryId
                        .replace("-", " ")
                        .substring(1, this.categoryId.length)
                        .toUpperCase()}
                    </Link>
                  </div>
                )}
              </div>
              <Comment />
            </React.Fragment>
          );
        } else {
          return null;
        }
      }
    }
  }

  fetchArticleDetail() {
    axios.get(this.dataURL).then(result => {
      console.log("result " + JSON.stringify(result));
      this.setState({
        isLoading: false,
        detailArticle: result.data.articles
      });
    });
  }
}

export default DetailPage;
