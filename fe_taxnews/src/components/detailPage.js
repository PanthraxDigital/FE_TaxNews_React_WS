import React, { Component } from "react";
import axios from "axios";
import { URL } from "../networkUtility";
import { DateFormat, getCategoryId } from "../commonUtility";
import marked from "marked";
import { Link } from "react-router-dom";
import MDReactComponent from "markdown-react-js";

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
    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: true,
      sanitize: true,
      smartLists: true,
      smartypants: true
    });
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
          let mdDescription = marked(
            this.state.detailArticle[0].description.md || ""
          );
          
          return (
            <div className="col-md-9 total-news">
              <div className="content">
                <div className="grid-header">
                  <a className="gotosingle" href="#">
                    {this.state.detailArticle[0].title}
                  </a>
                  <ul>
                    <li>
                      <span>
                        posted by{" "}
                        {this.state.detailArticle[0].author.name.first}{" "}
                        {this.state.detailArticle[0].author.name.last}
                      </span>
                      <span>
                        {" "}
                        on {DateFormat(this.state.detailArticle[0].articleDate)}
                      </span>
                    </li>
                  </ul>
                </div>
                <div
                  className="mdFormat"
                  style={{ fontSize: "1.1em", paddingTop: "10px" }}
                  dangerouslySetInnerHTML={{ __html: mdDescription }}
                />
                {/* <MDReactComponent
                  text={this.state.detailArticle[0].description.md}
                /> */}
                <br />
              </div>
              {this.state.detailArticle[0].link.length > 0 ? (
                <a
                  href={`${this.state.detailArticle[0].link}`}
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

              {this.categoryId === "from-desk" ? (
                <div>
                  <Link to="/">Back</Link>
                </div>
              ) : (
                <div>
                  <Link to={`${this.categoryId}`}>Back</Link>
                </div>
              )}
            </div>
          );
        } else {
          return null;
        }
      }
    }
  }

  fetchArticleDetail() {
    axios.get(this.dataURL).then(result => {
      this.setState({
        isLoading: false,
        detailArticle: result.data.articles
      });
    });
  }
}

export default DetailPage;
