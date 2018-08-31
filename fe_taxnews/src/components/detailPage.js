import React, { Component } from "react";
import axios from "axios";
import { URL } from "../networkUtility";
import { DateFormat } from "../commonUtility";
import marked from "marked";

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
              <div className="comments">
                <div
                  style={{ fontSize: "1.1em" }}
                  dangerouslySetInnerHTML={{ __html: mdDescription }}
                />
              </div>
            </div>
          </div>
        );
      }
    }
  }
}

export default DetailPage;

//1. design the detail page - done
//2. add the facebook comment login
//3. display the other news article list at the bottom, related to same category
{
  /* <li>
                          <a href="#">5000 views</a>
                        </li> */
}
