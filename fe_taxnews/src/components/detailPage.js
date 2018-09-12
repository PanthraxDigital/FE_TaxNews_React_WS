import React, { Component } from "react";
import axios from "axios";
import { URL } from "../networkUtility";
import { DateFormat } from "../commonUtility";
import marked from "marked";
import Comment from "./comment";
import { Link } from "react-router-dom";

class DetailPage extends Component {
  constructor(props) {
    super(props);
    let pathname = String(this.props.location.pathname);

    this.categoryId = pathname.substring(
      pathname.indexOf("/") + 1,
      pathname.lastIndexOf("/")
    );
    this.articleId = pathname.substring(
      pathname.lastIndexOf("/") + 1,
      pathname.length
    );
    this.url = `${URL}${this.categoryId}/${this.articleId}`;

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
    axios.get(this.url).then(result => {
      this.setState({
        isLoading: false,
        detailArticle: result.data.articles
      });
    });
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
        let mdDescription = marked(
          this.state.detailArticle.description.md || ""
        );

        return (
          <div className="col-md-9 total-news">
            <div className="content">
              <div className="grid-header">
                <a className="gotosingle" href="#">
                  {this.state.detailArticle.title}
                </a>
                <ul>
                  <li>
                    <span>
                      posted by {this.state.detailArticle.author.name.first}{" "}
                      {this.state.detailArticle.author.name.last}
                    </span>
                    <span>
                      {" "}
                      on {DateFormat(this.state.detailArticle.articleDate)}
                    </span>
                  </li>
                </ul>
              </div>
              <div
                style={{ fontSize: "1.1em", paddingTop: "10px" }}
                dangerouslySetInnerHTML={{ __html: mdDescription }}
              />
              <br />
            </div>
            {this.state.detailArticle.link.length > 0 ? (
              <a
                href={`${this.state.detailArticle.link}`}
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
                <Link to={`/${this.categoryId}`}>Back</Link>
              </div>
            )}
          </div>
        );
      }
    }
  }
}

export default DetailPage;
